import { Module } from '@nestjs/common';
import { LogHelperService } from '../logs/log-helper.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PathologyController } from './pathologies.controller';
import { PathologyService } from './pathologies.service';
import { StorageModule } from 'src/storage/storage.module';
import { AppConfigModule } from 'src/config/config.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PathologyPhotoModule } from '../pathology-photos/pathology-photos.module';

@Module({
  imports: [StorageModule, AppConfigModule, PrismaModule, PathologyPhotoModule],
  controllers: [PathologyController],
  providers: [PathologyService, PrismaService, LogHelperService],
})
export class PathologyModule {}
