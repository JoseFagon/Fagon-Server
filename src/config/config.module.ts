import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SupabaseModule } from 'nestjs-supabase-js';
import { LoggerModule } from 'nestjs-pino';
import { BullModule } from '@nestjs/bull';
import { TerminusModule } from '@nestjs/terminus';
import { CacheModule } from '@nestjs/cache-manager';
import { validate } from './env.validation';
import { supabaseConfig } from './supabase.config';
import { bullConfig } from './bull.config';
import { cacheConfig } from './cache.config';
import { loggerConfig } from './logger.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }),
    LoggerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: loggerConfig,
    }),
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: bullConfig,
    }),
    CacheModule.registerAsync({
      inject: [ConfigService],
      useFactory: cacheConfig,
    }),
    SupabaseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (...args: unknown[]) => {
        const configService = args[0] as ConfigService;
        const config = supabaseConfig(configService);
        return config;
      },
    }),
    TerminusModule,
  ],
  providers: [],
  exports: [
    ConfigModule,
    LoggerModule,
    BullModule,
    CacheModule,
    SupabaseModule,
    TerminusModule,
  ],
})
export class AppConfigModule {}
