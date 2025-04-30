import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StorageService } from './storage.service';
import { createClient, SupabaseClientOptions } from '@supabase/supabase-js';
import { supabaseConfig } from 'src/config/supabase.config';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'SUPABASE_CLIENT',
      useFactory: (configService: ConfigService) => {
        const config = supabaseConfig(configService);
        return createClient(
          config.supabaseUrl,
          config.supabaseKey,
          config.options as SupabaseClientOptions<'public'>,
        );
      },
      inject: [ConfigService],
    },
    StorageService,
  ],
  exports: [StorageService],
})
export class StorageModule {}
