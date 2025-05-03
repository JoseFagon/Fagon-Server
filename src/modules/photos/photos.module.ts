import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PhotoController } from './photos.controller';
import { StorageModule } from 'src/storage/storage.module';
import { PhotoService } from './photos.service';

@Module({
  imports: [StorageModule],
  controllers: [PhotoController],
  providers: [PhotoService, PrismaService],
})
export class PhotoModule {}
