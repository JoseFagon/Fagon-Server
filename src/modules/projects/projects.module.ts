import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProjectService } from './projects.service';
import { ProjectController } from './projects.controller';
import { LogHelperService } from '../logs/log-helper.service';
import { PavementService } from '../pavements/pavements.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, PrismaService, PavementService, LogHelperService],
  exports: [ProjectService],
})
export class ProjectModule {}
