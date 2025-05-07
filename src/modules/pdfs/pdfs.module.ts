import { Module } from '@nestjs/common';
import { PdfResolver } from './graphql/pdf.resolver';
import { PdfService } from './pdfs.service';
import { StorageModule } from 'src/storage/storage.module';
import { AppConfigModule } from 'src/config/config.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [StorageModule, PrismaModule, AppConfigModule],
  providers: [PdfService, PdfResolver],
})
export class PdfModule {}
