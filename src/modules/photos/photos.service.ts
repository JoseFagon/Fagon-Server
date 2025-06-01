import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { StorageService } from 'src/storage/storage.service';
import { PhotoResponseDto } from './dto/response-photo.dto';
import { SupabaseClient } from '@supabase/supabase-js';
import { InjectSupabaseClient } from 'nestjs-supabase-js';

@Injectable()
export class PhotoService {
  constructor(
    private prisma: PrismaService,
    private storageService: StorageService,
    @InjectSupabaseClient() private supabase: SupabaseClient,
  ) {}

  async uploadPhotos(files: Express.Multer.File[], locationId: string) {
    const location = await this.prisma.location.findUnique({
      where: { id: locationId },
      include: { project: true },
    });

    if (!location) {
      throw new NotFoundException('Localização não encontrada');
    }

    const uploadedPhotos: PhotoResponseDto[] = [];

    for (const file of files) {
      try {
        const uploadResult = await this.storageService.uploadFile(
          {
            originalname: file.originalname || `photo-${Date.now()}.jpg`,
            buffer: file.buffer,
            mimetype: file.mimetype || 'image/jpeg',
            size: file.size,
          },
          'locations',
        );

        const photo = await this.prisma.photo.create({
          data: {
            locationId,
            filePath: uploadResult.key,
            selectedForPdf: false,
          },
        });

        uploadedPhotos.push({
          id: photo.id,
          filePath: photo.filePath,
          selectedForPdf: photo.selectedForPdf,
          locationId: photo.locationId,
          url: uploadResult.url,
          location: {
            id: location.id,
            name: location.name,
          },
        });
      } catch (error) {
        console.error(`Error uploading file ${file.originalname}:`, error);
        throw new Error(`Failed to upload photo: ${file.originalname}`);
      }
    }

    return uploadedPhotos;
  }

  async getPhotosByLocation(locationId: string) {
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

    return photos.map((photo) => ({
      ...photo,
      url: this.supabase.storage.from('photos').getPublicUrl(photo.filePath)
        .data.publicUrl,
    }));
  }

  async updatePhoto(id: string, selectedForPdf: boolean) {
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
      url: this.supabase.storage.from('photos').getPublicUrl(photo.filePath)
        .data.publicUrl,
    };
  }

  async deletePhoto(id: string) {
    const photo = await this.prisma.photo.findUnique({ where: { id } });
    if (!photo) {
      throw new NotFoundException('Foto não encontrada');
    }

    await this.storageService.deleteFile(photo.filePath, 'locations');
    await this.prisma.photo.delete({ where: { id } });

    return { success: true, message: 'Foto deletada com sucesso' };
  }
}
