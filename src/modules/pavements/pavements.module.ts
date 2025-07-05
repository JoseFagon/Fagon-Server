import { forwardRef, Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { PavementController } from './pavements.controller';
import { PavementService } from './pavements.service';
import { LogHelperService } from '../logs/log-helper.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { ProjectModule } from '../projects/projects.module';
import { LocationModule } from '../locations/locations.module';

@Module({
  imports: [
    PrismaModule,
    forwardRef(() => ProjectModule),
    forwardRef(() => LocationModule),
  ],
  controllers: [PavementController],
  providers: [PavementService, PrismaService, LogHelperService],
  exports: [PavementService],
})
export class PavementModule {}
