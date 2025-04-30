import { Module } from '@nestjs/common';
import { MailerModule as NestMailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { mailerConfig } from '../config/mailer.config';

@Module({
  imports: [
    NestMailerModule.forRootAsync({
      imports: [],
      inject: [ConfigService],
      useFactory: mailerConfig,
    }),
  ],
  exports: [NestMailerModule],
})
export class MailerModule {}
