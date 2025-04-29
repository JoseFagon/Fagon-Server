import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FlagsService } from './flags.service';

@Module({
  imports: [ConfigModule], // Importe ConfigModule se for usar variáveis de ambiente
  providers: [FlagsService],
  exports: [FlagsService], // Exporte o serviço para que outros módulos possam usá-lo
})
export class FlagsModule {}
