import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StorageModule } from 'src/storage/storage.module';
import { PathologyPhotoController } from './pathology-photos.controller';
import { PathologyPhotoService } from './pathology-photos.service';

@Module({
  imports: [StorageModule],
  controllers: [PathologyPhotoController],
  providers: [PathologyPhotoService, PrismaService],
})
export class PathologyPhotoModule {}
