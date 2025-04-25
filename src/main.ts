import { NestFactory } from '@nestjs/core';
import * as Sentry from '@sentry/node';
import { AppModule } from './app.module';
import { sentryConfig } from './config/sentry.config';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Sentry.init(sentryConfig);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
void bootstrap();
