import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AgencyService } from './agencies.service';
import { AgencyController } from './agencies.controller';

@Module({
  controllers: [AgencyController],
  providers: [AgencyService, PrismaService],
})
export class AgencyModule {}
