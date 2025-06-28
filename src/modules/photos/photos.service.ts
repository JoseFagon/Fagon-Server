import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { StorageService } from 'src/storage/storage.service';
import { SupabaseClient } from '@supabase/supabase-js';
import { InjectSupabaseClient } from 'nestjs-supabase-js';
import { LocationService } from '../locations/locations.service';

@Injectable()
export class PhotoService {
  constructor(
    private prisma: PrismaService,
    private storageService: StorageService,
    @Inject(forwardRef(() => LocationService))
    private locationService: LocationService,
    @InjectSupabaseClient() private supabase: SupabaseClient,
  ) {}

  async uploadPhotos(files: Express.Multer.File[], locationId: string) {
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

    try {
      const uploadedPhotos = await Promise.all(
        files.map(async (file) => {
          const uploadResult = await this.storageService.uploadFile({
            originalname: file.originalname || `photo-${Date.now()}.jpg`,
            buffer: file.buffer,
            mimetype: file.mimetype || 'image/jpeg',
            size: file.size,
          });

          return this.prisma.photo.create({
            data: {
              locationId,
              filePath: uploadResult.key,
              selectedForPdf: false,
            },
          });
        }),
      );

      return uploadedPhotos;
    } catch (error) {
      console.error('Upload failed:', error);
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

  async updatePhoto(id: string, selectedForPdf: boolean | undefined) {
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

  async deletePhoto(id: string) {
    const photo = await this.prisma.photo.findUnique({ where: { id } });
    if (!photo) {
      throw new NotFoundException('Foto não encontrada');
    }

    await this.storageService.deleteFile(photo.filePath);
    await this.prisma.photo.delete({ where: { id } });

    return { success: true, message: 'Foto deletada com sucesso' };
  }
}
