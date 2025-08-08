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
import { PathologyService } from '../pathologies/pathologies.service';

@Injectable()
export class PathologyPhotoService {
  constructor(
    private prisma: PrismaService,
    private storageService: StorageService,
    @Inject(forwardRef(() => PathologyService))
    private pathologyService: PathologyService,
    @InjectSupabaseClient() private supabase: SupabaseClient,
  ) {}

  async uploadPhotos(files: Express.Multer.File[], pathologyId: string) {
    const pathology = await this.pathologyService.findOne(pathologyId);

    const MAX_FILE_SIZE = 1000 * 1024 * 1024; // 1000MB
    const invalidFiles = files.filter(
      (file) =>
        file.size > MAX_FILE_SIZE || !file.mimetype?.startsWith('image/'),
    );

    if (invalidFiles.length > 0) {
      throw new BadRequestException(
        `Arquivos inválidos: tamanho máximo 10MB e apenas imagens são permitidas`,
      );
    }

    const existingPhotoCount = await this.prisma.pathologyPhoto.count({
      where: { pathologyId },
    });

    try {
      const uploadedPhotos = await Promise.all(
        files.map(async (file, index) => {
          const photoNumber = existingPhotoCount + index + 1;

          const uploadResult = await this.storageService.uploadFile({
            originalname:
              file.originalname || `pathology-photo-${Date.now()}.jpg`,
            buffer: file.buffer,
            mimetype: file.mimetype || 'image/jpeg',
            size: file.size,
          });

          return this.prisma.pathologyPhoto.create({
            data: {
              name: `Foto-Patologia${photoNumber}-${pathology.referenceLocation}`,
              pathologyId,
              filePath: uploadResult.key,
            },
            include: {
              pathology: {
                include: {
                  project: {
                    select: {
                      id: true,
                      upeCode: true,
                    },
                  },
                },
              },
            },
          });
        }),
      );

      return uploadedPhotos;
    } catch {
      throw new InternalServerErrorException('Falha ao fazer upload das fotos');
    }
  }

  async getPhotoByPathology(id: string) {
    const photo = await this.prisma.pathologyPhoto.findUnique({
      where: { id },
      include: {
        pathology: {
          include: {
            project: {
              select: {
                id: true,
                upeCode: true,
              },
            },
          },
        },
      },
    });

    if (!photo) {
      throw new NotFoundException('Foto da patologia não encontrada');
    }

    return photo;
  }

  async getPhotosByPathology(pathologyId: string, includeSignedUrl = false) {
    const photos = await this.prisma.pathologyPhoto.findMany({
      where: { pathologyId },
      include: {
        pathology: {
          include: {
            project: true,
            location: true,
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

  async deletePhoto(id: string, currentUser?: { role: string }) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para deletar foto da patologia',
      );
    }

    const photo = await this.prisma.pathologyPhoto.findUnique({
      where: { id },
    });
    if (!photo) {
      throw new NotFoundException('Foto da patologia não encontrada');
    }

    await this.storageService.deleteFile(photo.filePath);
    await this.prisma.pathologyPhoto.delete({ where: { id } });

    return { success: true, message: 'Foto da patologia deletada com sucesso' };
  }
}
