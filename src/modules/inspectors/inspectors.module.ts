import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { InspectorService } from './inspectors.service';
import { InspectorController } from './inspectors.controller';
import { LogHelperService } from '../logs/log-helper.service';

@Module({
  controllers: [InspectorController],
  providers: [InspectorService, PrismaService, LogHelperService],
  exports: [InspectorService],
})
export class InspectorModule {}
