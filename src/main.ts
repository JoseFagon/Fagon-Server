import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { setupSwagger } from './docs/swagger.config';
import { PrismaService } from './prisma/prisma.service';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { HeightTransformPipe } from './common/pipes/height-transform.pipe';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);
  const logger = new Logger('Bootstrap');
  const port = process.env.PORT || 3000;

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new HeightTransformPipe());

  setupSwagger(app);
  app.useGlobalInterceptors(new TransformInterceptor());

  prismaService.enableShutdownHooks(app);

  app.enableCors({
    origin: [
      'http://localhost:8080',
      'http://localhost:3000',
      'https://fagon-server-c822.onrender.com',
      'https://fagon.vercel.app',
      'https://fagon-server.onrender.com',
      'https://fagon-client.vercel.app',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Cache-Control',
      'X-Requested-With',
    ],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      transform: true,
      whitelist: false,
      forbidNonWhitelisted: false,
      transformOptions: {
        enableImplicitConversion: true,
      },
      skipMissingProperties: false,
      forbidUnknownValues: false,
    }),
  );
  await app.listen(port);
  logger.log(`Application running on port ${port}`);
}

bootstrap().catch((err) => {
  console.error('❌ Erro ao iniciar o app:', err);
  console.error('❌ Stack:', err.stack);
  process.exit(1);
});
