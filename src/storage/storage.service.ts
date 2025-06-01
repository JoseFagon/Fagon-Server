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
    const allowedMimeTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf',
    ];

    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new Error(
        'Tipo de arquivo não suportado. São permitidos: JPEG, PNG, GIF, WEBP, PDF',
      );
    }

    const sanitizedName = (file.originalname || `file-${Date.now()}`)
      .replace(/[^a-zA-Z0-9._-]/g, '-')
      .substring(0, 100);

    const fileExt =
      file.originalname?.split('.').pop() ||
      (file.mimetype === 'image/jpeg'
        ? 'jpg'
        : file.mimetype === 'image/png'
          ? 'png'
          : file.mimetype === 'image/gif'
            ? 'gif'
            : file.mimetype === 'image/webp'
              ? 'webp'
              : 'bin');

    const filePath = `uploads/${Date.now()}-${sanitizedName}.${fileExt}`;

    const { error } = await this.supabase.storage
      .from(bucket)
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
        upsert: false,
        cacheControl: '3600',
      });

    if (error) {
      throw new Error(`Upload failed: ${error.message}`);
    }

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

  getFileUrl(filePath: string, bucket = 'default'): string {
    const {
      data: { publicUrl },
    } = this.supabase.storage.from(bucket).getPublicUrl(filePath);

    if (!publicUrl) {
      throw new Error('Failed to get public URL');
    }

    return publicUrl;
  }
}
