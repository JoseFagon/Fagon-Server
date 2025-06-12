import { forwardRef, Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StorageModule } from 'src/storage/storage.module';
import { PathologyPhotoController } from './pathology-photos.controller';
import { PathologyPhotoService } from './pathology-photos.service';
import { AppConfigModule } from 'src/config/config.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PathologyModule } from '../pathologies/pathologies.module';

@Module({
  imports: [
    AppConfigModule,
    StorageModule,
    PrismaModule,
    forwardRef(() => PathologyModule),
  ],
  controllers: [PathologyPhotoController],
  providers: [PathologyPhotoService, PrismaService],
  exports: [PathologyPhotoService],
})
export class PathologyPhotoModule {}
