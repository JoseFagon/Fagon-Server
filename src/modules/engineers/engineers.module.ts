import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { EngineerService } from './engineers.service';
import { EngineerController } from './engineers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from '../users/users.module';

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [EngineerController],
  providers: [EngineerService, PrismaService],
  exports: [EngineerService],
})
export class EngineerModule {}
