import { Injectable } from '@nestjs/common';
import { FileUpload, StorageResult } from './types/file-upload.type';
import { SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';
import { InjectSupabaseClient } from 'nestjs-supabase-js';

@Injectable()
export class StorageService {
  constructor(
    @InjectSupabaseClient() private supabase: SupabaseClient,
    private config: ConfigService,
  ) {}

  async uploadFile(
    file: FileUpload,
    bucket = 'default',
  ): Promise<StorageResult> {
    if (
      file.mimetype !== 'application/pdf' &&
      !file.mimetype.startsWith('image/')
    ) {
      throw new Error('Apenas arquivos PDF ou imagens são permitidos.');
    }

    const filePath = `uploads/${Date.now()}-${file.originalname}`;

    const { data, error } = await this.supabase.storage
      .from(bucket)
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
        upsert: false,
      });

    console.log('Upload result:', data);

    if (error) throw new Error(`Upload failed: ${error.message}`);

    const {
      data: { publicUrl },
    } = this.supabase.storage.from(bucket).getPublicUrl(filePath);

    return {
      url: publicUrl,
      key: filePath,
      metadata: {
        size: file.size,
        mimetype: file.mimetype,
        uploadedAt: new Date(),
      },
    };
  }

  async deleteFile(filePath: string, bucket = 'default'): Promise<void> {
    const { error } = await this.supabase.storage
      .from(bucket)
      .remove([filePath]);

    if (error) {
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  }
}
