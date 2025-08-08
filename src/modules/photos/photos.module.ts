import { forwardRef, Module } from '@nestjs/common';
import { PhotoController } from './photos.controller';
import { StorageModule } from '../../storage/storage.module';
import { PhotoService } from './photos.service';
import { AppConfigModule } from '../../config/config.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { LocationModule } from '../locations/locations.module';
import { ProjectModule } from '../projects/projects.module';

@Module({
  imports: [
    StorageModule,
    PrismaModule,
    AppConfigModule,
    ProjectModule,
    forwardRef(() => LocationModule),
  ],
  controllers: [PhotoController],
  providers: [PhotoService],
  exports: [PhotoService],
})
export class PhotoModule {}
