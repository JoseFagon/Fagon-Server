import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { MetricsController } from './metrics.controller';
import { MetricsService } from './metrics.service';
import { Registry } from 'prom-client';

@Module({
  imports: [PrometheusModule.register()],
  controllers: [MetricsController],
  providers: [
    MetricsService,
    {
      provide: Registry,
      useValue: new Registry(),
    },
  ],
  exports: [MetricsService],
})
export class MetricsModule {}
