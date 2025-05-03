import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PavementController } from './pavements.controller';
import { PavementService } from './pavements.service';
import { LogHelperService } from '../logs/log-helper.service';

@Module({
  controllers: [PavementController],
  providers: [PavementService, PrismaService, LogHelperService],
})
export class PavementModule {}
