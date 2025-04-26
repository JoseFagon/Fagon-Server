import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from '@nestjs-modules/mailer';
import { RedisModule } from '@nestjs-modules/ioredis';
import * as Sentry from '@sentry/node';
import { NestSupabaseConfig, SupabaseModule } from 'nestjs-supabase-js';
import { LoggerModule } from 'nestjs-pino';
import { BullModule } from '@nestjs/bull';
import { TerminusModule } from '@nestjs/terminus';
import { CacheModule } from '@nestjs/cache-manager';

import { graphqlConfig } from './graphql.config';
import { sentryConfig } from './sentry.config';
import { validate } from './env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }),
    LoggerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        pinoHttp: {
          level: config.get('LOG_LEVEL', 'info'),
          transport:
            config.get('NODE_ENV') !== 'production'
              ? { target: 'pino-pretty' }
              : undefined,
          serializers: {
            req: (req: Request) => ({
              method: req.method,
              url: req.url,
              headers: Object.fromEntries(
                Object.entries(req.headers).filter(
                  ([key]) =>
                    !['authorization', 'cookie'].includes(key.toLowerCase()),
                ),
              ),
            }),
          },
        },
      }),
    }),
    GraphQLModule.forRoot(graphqlConfig),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: {
          expiresIn: config.get('JWT_EXPIRES_IN', '1d'),
        },
      }),
    }),
    RedisModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService): any => ({
        config: {
          host: config.get<string>('REDIS_HOST'),
          port: config.get<number>('REDIS_PORT'),
          password: config.get<string>('REDIS_PASSWORD'),
        },
      }),
    }),
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        redis: {
          host: config.get('REDIS_HOST'),
          port: config.get('REDIS_PORT'),
          password: config.get('REDIS_PASSWORD'),
        },
      }),
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get<number>('CACHE_TTL', 5),
        store: config.get<string>('CACHE_STORE', 'memory'),
      }),
    }),
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        transport: {
          host: config.get<string>('MAIL_HOST'),
          port: config.get<number>('MAIL_PORT'),
          secure: config.get<boolean>('MAIL_SECURE') ?? false,
          auth: {
            user: config.get<string>('MAIL_USER'),
            pass: config.get<string>('MAIL_PASS'),
          },
        },
      }),
    }),
    SupabaseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (...args: unknown[]): NestSupabaseConfig => {
        const config = args[0] as ConfigService;

        return {
          supabaseUrl: config.get<string>('SUPABASE_URL') ?? '',
          supabaseKey: config.get<string>('SUPABASE_KEY') ?? '',
        };
      },
    }),
    TerminusModule,
  ],
  providers: [
    {
      provide: 'SENTRY',
      useFactory: (config: ConfigService) => {
        Sentry.init({
          ...sentryConfig,
          dsn: config.get<string>('SENTRY_DSN'),
          environment: config.get<string>('NODE_ENV', 'development'),
        });
        return Sentry;
      },
      inject: [ConfigService],
    },
  ],
  exports: [
    ConfigModule,
    GraphQLModule,
    JwtModule,
    RedisModule,
    BullModule,
    CacheModule,
    MailerModule,
    SupabaseModule,
    TerminusModule,
    LoggerModule,
    'SENTRY',
  ],
})
export class AppConfigModule {}
