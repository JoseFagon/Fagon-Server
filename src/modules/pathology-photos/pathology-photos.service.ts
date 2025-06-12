import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SupabaseClient } from '@supabase/supabase-js';
import { StorageService } from 'src/storage/storage.service';
import { PathologyPhotoResponseDto } from './dto/response-pathology-photo.dto';
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
    const pathologyExists = await this.pathologyService.findOne(pathologyId);

    if (!pathologyExists) {
      throw new NotFoundException('Patologia não encontrada');
    }

    const uploadedPhotos: PathologyPhotoResponseDto[] = [];

    for (const file of files) {
      const uploadResult = await this.storageService.uploadFile({
        originalname: file.originalname,
        buffer: file.buffer,
        mimetype: file.mimetype,
        size: file.size,
      });

      const photo = await this.prisma.pathologyPhoto.create({
        data: {
          pathologyId,
          filePath: uploadResult.key,
        },
      });

      uploadedPhotos.push({
        ...photo,
        url: uploadResult.url,
      });
    }

    return uploadedPhotos;
  }

  async getPhotosByPathology(pathologyId: string) {
    const photos = await this.prisma.pathologyPhoto.findMany({
      where: { pathologyId },
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

    return photos.map((photo) => ({
      ...photo,
      url: this.storageService.getSignedUrl(photo.filePath),
    }));
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

    return {
      ...photo,
      url: await this.storageService.getSignedUrl(photo.filePath),
    };
  }

  async deletePhoto(id: string) {
    const photo = await this.prisma.pathologyPhoto.findUnique({
      where: { id },
      include: {
        pathology: {
          select: {
            projectId: true,
          },
        },
      },
    });

    if (!photo) {
      throw new NotFoundException('Foto da patologia não encontrada');
    }

    await this.storageService.deleteFile(photo.filePath);

    await this.prisma.pathologyPhoto.delete({ where: { id } });
  }
}
