import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AgencyService } from './agencies.service';
import { AgencyController } from './agencies.controller';
import { LogHelperService } from '../logs/log-helper.service';

@Module({
  controllers: [AgencyController],
  providers: [AgencyService, PrismaService, LogHelperService],
  exports: [AgencyService],
})
export class AgencyModule {}
