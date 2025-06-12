import { forwardRef, Module } from '@nestjs/common';
import { PhotoController } from './photos.controller';
import { StorageModule } from 'src/storage/storage.module';
import { PhotoService } from './photos.service';
import { AppConfigModule } from 'src/config/config.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LocationModule } from '../locations/locations.module';

@Module({
  imports: [
    StorageModule,
    PrismaModule,
    AppConfigModule,
    forwardRef(() => LocationModule),
  ],
  controllers: [PhotoController],
  providers: [PhotoService],
  exports: [PhotoService],
})
export class PhotoModule {}
