import { forwardRef, Module } from '@nestjs/common';
import { LocationController } from './locations.controller';
import { LocationService } from './locations.service';
import { AppConfigModule } from 'src/config/config.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProjectModule } from '../projects/projects.module';
import { PavementModule } from '../pavements/pavements.module';
import { MaterialFinishingModule } from '../material-finishings/material-finishings.module';
import { PhotoModule } from '../photos/photos.module';
import { LogModule } from '../logs/logs.module';

@Module({
  imports: [
    AppConfigModule,
    PrismaModule,
    forwardRef(() => ProjectModule),
    forwardRef(() => PavementModule),
    MaterialFinishingModule,
    forwardRef(() => PhotoModule),
    LogModule,
  ],
  controllers: [LocationController],
  providers: [LocationService],
  exports: [LocationService],
})
export class LocationModule {}
