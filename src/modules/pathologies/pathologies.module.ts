import { Module } from '@nestjs/common';
import { LogHelperService } from '../logs/log-helper.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PathologyController } from './pathologies.controller';
import { PathologyService } from './pathologies.service';

@Module({
  controllers: [PathologyController],
  providers: [PathologyService, PrismaService, LogHelperService],
})
export class PathologyModule {}
