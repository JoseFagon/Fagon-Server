import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LogHelperService } from '../logs/log-helper.service';
import { LocationController } from './locations.controller';
import { LocationService } from './locations.service';
import { MaterialFinishingService } from '../material-finishings/material-finishings.service';
import { PavementService } from '../pavements/pavements.service';
import { PhotoService } from '../photos/photos.service';

@Module({
  controllers: [LocationController],
  providers: [
    LocationService,
    PrismaService,
    LogHelperService,
    PhotoService,
    PavementService,
    MaterialFinishingService,
  ],
})
export class LocationModule {}
