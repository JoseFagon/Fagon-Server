import {
  BadRequestException,
  ForbiddenException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { StorageService } from '../../storage/storage.service';
import { SupabaseClient } from '@supabase/supabase-js';
import { InjectSupabaseClient } from 'nestjs-supabase-js';
import { LocationService } from '../locations/locations.service';
import { ProjectService } from '../projects/projects.service';
import { ProjectResponseDto } from '../projects/dto/response-project.dto';
import { LocationResponseDto } from '../locations/dto/response-location.dto';

@Injectable()
export class PhotoService {
  constructor(
    private prisma: PrismaService,
    private storageService: StorageService,
    @Inject(forwardRef(() => LocationService))
    private locationService: LocationService,
    private projectService: ProjectService,
    @InjectSupabaseClient() private supabase: SupabaseClient,
  ) {}

  async uploadPhotos(files: Express.Multer.File[], locationId: string) {
    const location: LocationResponseDto =
      await this.locationService.validateLocationExists(locationId);

    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    const invalidFiles = files.filter(
      (file) =>
        file.size > MAX_FILE_SIZE || !file.mimetype?.startsWith('image/'),
    );

    if (invalidFiles.length > 0) {
      throw new BadRequestException(
        `Arquivos inválidos: tamanho máximo 10MB e apenas imagens são permitidas`,
      );
    }

    const existingPhotoCount = await this.prisma.photo.count({
      where: { locationId },
    });

    const project: ProjectResponseDto = await this.projectService.findOne(location.projectId)

    try {
      const uploadedPhotos = await Promise.all(
        files.map(async (file, index) => {
          const photoNumber = existingPhotoCount + index + 1;

          const uploadResult = await this.storageService.uploadFile({
            originalname: `${project.agency.agencyNumber}-${project.projectType}-${Date.now()}-${file.originalname}`,
            buffer: file.buffer,
            mimetype: file.mimetype || 'image/jpeg',
            size: file.size,
          });

          return this.prisma.photo.create({
            data: {
              name: `Foto${photoNumber}-${location.name}`,
              locationId,
              filePath: uploadResult.key,
              selectedForPdf: false,
            },
          });
        }),
      );

      return uploadedPhotos;
    } catch {
      throw new InternalServerErrorException('Falha ao fazer upload das fotos');
    }
  }

  async getPhotoById(id: string) {
    const photo = await this.prisma.photo.findUnique({
      where: { id },
    });

    if (!photo) {
      throw new NotFoundException('Foto não encontrada');
    }

    return photo;
  }

  async getPhotosByLocation(locationId: string, includeSignedUrl = false) {
    const photos = await this.prisma.photo.findMany({
      where: { locationId },
      include: {
        location: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (includeSignedUrl) {
      return Promise.all(
        photos.map(async (photo) => ({
          ...photo,
          signedUrl: await this.storageService.getSignedUrl(photo.filePath),
        })),
      );
    }

    return photos;
  }

  async updatePhoto(
    id: string,
    selectedForPdf: boolean | undefined,
    currentUser?: { role: string },
  ) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para atualizar foto',
      );
    }

    const photo = await this.prisma.photo.update({
      where: { id },
      data: { selectedForPdf },
      include: {
        location: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return {
      ...photo,
      url: await this.storageService.getSignedUrl(photo.filePath),
    };
  }

  async deletePhoto(id: string, currentUser?: { role: string }) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para deletar foto',
      );
    }

    const photo = await this.prisma.photo.findUnique({ where: { id } });
    if (!photo) {
      throw new NotFoundException('Foto não encontrada');
    }

    await this.storageService.deleteFile(photo.filePath);
    await this.prisma.photo.delete({ where: { id } });

    return { success: true, message: 'Foto deletada com sucesso' };
  }
}
