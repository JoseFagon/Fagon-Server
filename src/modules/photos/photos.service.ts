import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { SupabaseClient } from '@supabase/supabase-js';
import { StorageService } from 'src/storage/storage.service';
import { PhotoResponseDto } from './dto/response-photo.dto';
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
      const uploadResult = await this.storageService.uploadFile(
        {
          originalname: file.originalname,
          buffer: file.buffer,
          mimetype: file.mimetype,
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
        ...photo,
        url: uploadResult.url,
        location: {
          id: location.id,
          name: location.name,
        },
      });
    }

    return uploadedPhotos;
  }

  async getPhotosByLocation(locationId: string) {
    const photos = await this.prisma.photo.findMany({
      where: { locationId },
      include: {
        location: true,
      },
    });

    return photos.map((photo) => ({
      ...photo,
      url: this.supabase.storage.from('photos').getPublicUrl(photo.filePath)
        .data.publicUrl,
    }));
  }

  async updatePhoto(id: string, updatePhotoDto: UpdatePhotoDto) {
    const photo = await this.prisma.photo.update({
      where: { id },
      data: updatePhotoDto,
      include: {
        location: true,
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

    await this.supabase.storage.from('photos').remove([photo.filePath]);

    await this.prisma.photo.delete({ where: { id } });
  }
}
