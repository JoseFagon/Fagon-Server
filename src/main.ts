import { NestFactory } from '@nestjs/core';
import * as Sentry from '@sentry/node';
import { AppModule } from './app.module';
import { sentryConfig } from './config/sentry.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Sentry.init(sentryConfig);
  await app.listen(3000);
}
void bootstrap();
