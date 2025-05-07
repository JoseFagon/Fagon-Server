import { Module } from '@nestjs/common';
import { PhotoController } from './photos.controller';
import { StorageModule } from 'src/storage/storage.module';
import { PhotoService } from './photos.service';
import { AppConfigModule } from 'src/config/config.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [StorageModule, PrismaModule, AppConfigModule],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
