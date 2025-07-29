import { Module } from '@nestjs/common';
import { PdfService } from './pdfs.service';
import { StorageModule } from '../../storage/storage.module';
import { AppConfigModule } from '../../config/config.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { ProjectModule } from '../projects/projects.module';
import { PdfController } from './pdfs.controller';
import { LogHelperService } from '../logs/log-helper.service';
import { StateLawModule } from '../state-laws/state-laws.module';

@Module({
  imports: [
    StorageModule,
    PrismaModule,
    AppConfigModule,
    ProjectModule,
    StateLawModule,
  ],
  providers: [PdfService, LogHelperService],
  controllers: [PdfController],
})
export class PdfModule {}
