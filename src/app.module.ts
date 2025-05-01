import { join } from 'path';
import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';

import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { JwtAuthGuard } from './auth/guards/auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { AppConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { ValidationPipe } from './common/pipes/validation.pipe';
import { MetricsModule } from './core/monitoring/metrics/metrics.module';
import { FlagsModule } from './feature-flags/flags.module';
import { GatewaysModule } from './gateways/gateways.module';
import { SwaggerModule } from '@nestjs/swagger';
import { PrismaModule } from './prisma/prisma.module';
import { QueueModule } from './queue/queue.module';
import { LoggerModule } from './core/logger/logger.module';
import { RateLimitModule } from './core/rate-limit/rate-limit.module';
import { GraphqlModule } from './graphql/graphql.module';
import { AgencyModule } from './modules/agencies/agencies.module';
// import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AppConfigModule,
    PrometheusModule.register({
      path: '/metrics',
      defaultMetrics: {
        enabled: true,
      },
    }),
    ScheduleModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*', '/graphql'],
    }),
    SwaggerModule,
    LoggerModule,
    FlagsModule,
    RateLimitModule,
    MetricsModule,
    GatewaysModule,
    QueueModule,
    GraphqlModule,
    PrismaModule,
    AuthModule,
    AgencyModule,
    // UsersModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
