import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  RedisModule as NestRedisModule,
  RedisModuleOptions,
} from '@nestjs-modules/ioredis';

@Module({
  imports: [
    NestRedisModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): RedisModuleOptions => ({
        type: 'single',
        url: configService.get<string>('REDIS_URL'),
        options: {
          host: configService.get<string>('REDIS_HOST'),
          port: configService.get<number>('REDIS_PORT'),
          password: configService.get<string>('REDIS_PASSWORD'),
          db: configService.get<number>('REDIS_DB', 0),
          keyPrefix: configService.get<string>('REDIS_PREFIX', 'fagon:'),
          tls: configService.get<boolean>('REDIS_TLS') ? {} : undefined,
        },
      }),
    }),
  ],
  providers: [],
  exports: [NestRedisModule],
})
export class RedisModule {}
