import { forwardRef, Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { StorageModule } from '../../storage/storage.module';
import { PathologyPhotoController } from './pathology-photos.controller';
import { PathologyPhotoService } from './pathology-photos.service';
import { AppConfigModule } from '../../config/config.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { PathologyModule } from '../pathologies/pathologies.module';
import { ProjectModule } from '../projects/projects.module';

@Module({
  imports: [
    AppConfigModule,
    StorageModule,
    PrismaModule,
    forwardRef(() => ProjectModule),
    forwardRef(() => PathologyModule),
  ],
  controllers: [PathologyPhotoController],
  providers: [PathologyPhotoService, PrismaService],
  exports: [PathologyPhotoService],
})
export class PathologyPhotoModule {}
