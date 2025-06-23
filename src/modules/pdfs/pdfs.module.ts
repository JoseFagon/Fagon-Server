import { Module } from '@nestjs/common';
import { PdfService } from './pdfs.service';
import { StorageModule } from 'src/storage/storage.module';
import { AppConfigModule } from 'src/config/config.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProjectModule } from '../projects/projects.module';
import { PdfController } from './pdfs.controller';

@Module({
  imports: [StorageModule, PrismaModule, AppConfigModule, ProjectModule],
  providers: [PdfService],
  controllers: [PdfController],
})
export class PdfModule {}
