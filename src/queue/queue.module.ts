import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { EmailWorker } from './workers/email.worker';
import { PdfWorker } from './workers/pdf.worker';
import { ImageWorker } from './workers/image.worker';

@Module({
  imports: [
    BullModule.forRoot({ redis: { host: 'localhost', port: 6379 } }),
    BullModule.registerQueue(
      { name: 'email' },
      { name: 'pdf' },
      { name: 'image' },
    ),
  ],
  providers: [EmailWorker, PdfWorker, ImageWorker],
  exports: [BullModule],
})
export class QueueModule {}
