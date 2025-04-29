import { Controller, Get } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { Registry } from 'prom-client';

@Controller()
export class MetricsController {
  constructor(private readonly registry: Registry) {}

  @Get('metrics')
  @ApiExcludeEndpoint()
  async getMetrics(): Promise<string> {
    return this.registry.metrics();
  }
}
