import { forwardRef, Module } from '@nestjs/common';
import { LogHelperService } from '../logs/log-helper.service';
import { PrismaService } from '../../prisma/prisma.service';
import { PathologyController } from './pathologies.controller';
import { PathologyService } from './pathologies.service';
import { StorageModule } from '../../storage/storage.module';
import { AppConfigModule } from '../../config/config.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { PathologyPhotoModule } from '../pathology-photos/pathology-photos.module';

@Module({
  imports: [
    StorageModule,
    AppConfigModule,
    PrismaModule,
    forwardRef(() => PathologyPhotoModule),
  ],
  controllers: [PathologyController],
  providers: [PathologyService, PrismaService, LogHelperService],
  exports: [PathologyService],
})
export class PathologyModule {}
