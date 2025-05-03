import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProjectService } from './projects.service';
import { ProjectController } from './projects.controller';
import { LogHelperService } from '../logs/log-helper.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, PrismaService, LogHelperService],
  exports: [ProjectService],
})
export class ProjectModule {}
