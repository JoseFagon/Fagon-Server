import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { EmailWorker } from './workers/email.worker';
import { PdfWorker } from './workers/pdf.worker';
import { ImageWorker } from './workers/image.worker';
import { redisConfig } from '../config/redis.config';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        redis: redisConfig(config).options,
      }),
    }),
    BullModule.registerQueue(
      { name: 'email' },
      { name: 'pdf' },
      { name: 'image' },
    ),
    MailerModule,
  ],
  providers: [EmailWorker, PdfWorker, ImageWorker],
  exports: [BullModule],
})
export class QueueModule {}
