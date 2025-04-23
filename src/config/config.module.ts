import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from '@nestjs-modules/mailer';
import { RedisModule } from '@nestjs-modules/ioredis';
import * as Sentry from '@sentry/node';
import { SupabaseModule, NestSupabaseConfig } from 'nestjs-supabase-js';

import { graphqlConfig } from './graphql.config';
import { sentryConfig } from './sentry.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot(graphqlConfig),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        transport: {
          host: config.get<string>('MAIL_HOST'),
          port: config.get<number>('MAIL_PORT'),
          secure: false,
          auth: {
            user: config.get<string>('MAIL_USER'),
            pass: config.get<string>('MAIL_PASS'),
          },
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
    SupabaseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService): NestSupabaseConfig => ({
        supabaseUrl: config.get<string>('SUPABASE_URL') || '',
        supabaseKey: config.get<string>('SUPABASE_KEY') || '',
      }),
    }),
  ],
  providers: [
    {
      provide: 'SENTRY',
      useFactory: () => {
        Sentry.init(sentryConfig);
        return Sentry;
      },
    },
  ],
  exports: [
    GraphQLModule,
    JwtModule,
    MailerModule,
    RedisModule,
    SupabaseModule,
    'SENTRY',
  ],
})
export class AppConfigModule {}
