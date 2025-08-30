import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DistanceController } from './distance.controller';
import { DistanceService } from './distance.service';

@Module({
  imports: [ConfigModule],
  providers: [DistanceService],
  controllers: [DistanceController],
  exports: [DistanceService],
})
export class DistanceModule {}
