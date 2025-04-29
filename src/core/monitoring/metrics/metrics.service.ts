import { Injectable } from '@nestjs/common';
import { Counter, Gauge, Histogram } from 'prom-client';

@Injectable()
export class MetricsService {
  // Métricas HTTP (original)
  public httpRequestCounter = new Counter({
    name: 'http_requests_total',
    help: 'Total de requisições HTTP',
    labelNames: ['method', 'route', 'status'],
  });

  public httpRequestDuration = new Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duração das requisições HTTP em segundos',
    labelNames: ['method', 'route', 'status'],
    buckets: [0.1, 0.5, 1, 2, 5],
  });

  // Métricas de Sistema (original)
  public memoryUsageGauge = new Gauge({
    name: 'nodejs_memory_usage_bytes',
    help: 'Uso de memória da aplicação',
    labelNames: ['type'],
  });

  // Métricas de Negócio (nova)
  public businessErrorsCounter = new Counter({
    name: 'business_errors_total',
    help: 'Erros de regras de negócio',
    labelNames: ['error_type'],
  });

  // Métricas Customizadas
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
