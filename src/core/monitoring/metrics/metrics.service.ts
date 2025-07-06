import { Injectable } from '@nestjs/common';
import { Counter, Gauge, Histogram, register } from 'prom-client';

@Injectable()
export class MetricsService {
  public httpRequestCounter: Counter<string>;
  public httpRequestDuration: Histogram<string>;
  public memoryUsageGauge: Gauge<string>;
  public businessErrorsCounter: Counter<string>;

  constructor() {
    this.httpRequestCounter =
      (register.getSingleMetric('http_requests_total') as Counter<string>) ??
      new Counter({
        name: 'http_requests_total',
        help: 'Total de requisições HTTP',
        labelNames: ['method', 'route', 'status'],
      });

    this.httpRequestDuration =
      (register.getSingleMetric(
        'http_request_duration_seconds',
      ) as Histogram<string>) ??
      new Histogram({
        name: 'http_request_duration_seconds',
        help: 'Duração das requisições HTTP em segundos',
        labelNames: ['method', 'route', 'status'],
        buckets: [0.1, 0.5, 1, 2, 5],
      });

    this.memoryUsageGauge =
      (register.getSingleMetric(
        'nodejs_memory_usage_bytes',
      ) as Gauge<string>) ??
      new Gauge({
        name: 'nodejs_memory_usage_bytes',
        help: 'Uso de memória da aplicação',
        labelNames: ['type'],
      });

    this.businessErrorsCounter =
      (register.getSingleMetric('business_errors_total') as Counter<string>) ??
      new Counter({
        name: 'business_errors_total',
        help: 'Erros de regras de negócio',
        labelNames: ['error_type'],
      });
  }

  registerRequest(
    method: string,
    route: string,
    status: string,
    duration: number,
  ) {
    this.httpRequestCounter.labels({ method, route, status }).inc();
    this.httpRequestDuration
      .labels({ method, route, status })
      .observe(duration);
  }

  updateMemoryUsage() {
    const memory = process.memoryUsage();
    this.memoryUsageGauge.labels({ type: 'rss' }).set(memory.rss);
    this.memoryUsageGauge.labels({ type: 'heap' }).set(memory.heapUsed);
  }

  recordBusinessError(errorType: string) {
    this.businessErrorsCounter.labels({ error_type: errorType }).inc();
  }
}
