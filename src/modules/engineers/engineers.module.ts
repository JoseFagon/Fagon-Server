import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { EngineerService } from './engineers.service';
import { EngineerController } from './engineers.controller';

@Module({
  controllers: [EngineerController],
  providers: [EngineerService, PrismaService],
  exports: [EngineerService],
})
export class EngineerModule {}
