import { forwardRef, Module } from '@nestjs/common';
import { PhotoController } from './photos.controller';
import { StorageModule } from '../../storage/storage.module';
import { PhotoService } from './photos.service';
import { AppConfigModule } from '../../config/config.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { LocationModule } from '../locations/locations.module';
import { ProjectModule } from '../projects/projects.module';
import { PavementModule } from '../pavements/pavements.module';
import { StorageService } from 'src/storage/storage.service';
import { LogHelperService } from '../logs/log-helper.service';
import { LogModule } from '../logs/logs.module';

@Module({
  imports: [
    StorageModule,
    PrismaModule,
    AppConfigModule,
    forwardRef(() => ProjectModule),
    forwardRef(() => LocationModule),
    forwardRef(() => PavementModule),
    LogModule,
  ],
  controllers: [PhotoController],
  providers: [PhotoService, StorageService, LogHelperService],
  exports: [PhotoService],
})
export class PhotoModule {}
