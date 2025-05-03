import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StateLawService } from './state-laws.service';
import { StateLawController } from './state-laws.controller';

@Module({
  controllers: [StateLawController],
  providers: [StateLawService, PrismaService],
})
export class StateLawModule {}
