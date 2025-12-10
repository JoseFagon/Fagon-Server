import { Injectable, NotFoundException } from '@nestjs/common';
import { FileUpload, StorageResult } from './types/file-upload.type';
import { SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';
import { InjectSupabaseClient } from 'nestjs-supabase-js';
import { Readable } from 'stream';
import {
  FileBufferResult,
  FileStreamResult,
} from '../common/interfaces/storage.interface';
import sharp from 'sharp';

@Injectable()
export class StorageService {
  private readonly bucketName: string;
  private readonly MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB

  constructor(
    @InjectSupabaseClient() private supabase: SupabaseClient,
    private config: ConfigService,
  ) {
    this.bucketName = this.config.getOrThrow<string>('SUPABASE_STORAGE_BUCKET');
  }

  async uploadFile(file: FileUpload, bucket?: string): Promise<StorageResult> {
    const targetBucket = bucket || this.bucketName;

    try {
      await this.validateUpload(file, targetBucket);

      let uploadBuffer = file.buffer;

      if (
        file.mimetype.startsWith('image/') &&
        file.buffer.length < 5 * 1024 * 1024
      ) {
        try {
          uploadBuffer = await this.optimizeImage(file.buffer, {
            quality: 80,
            width: 1200,
            format: this.getOriginalFormat(file.mimetype),
          });
        } catch {
          console.warn('❌ Erro na otimização, usando original:');
          uploadBuffer = file.buffer;
        }
      } else {
        uploadBuffer = file.buffer;
      }

      const filePath = this.generateFilePath(file);

      const { error } = await this.supabase.storage
        .from(targetBucket)
        .upload(filePath, uploadBuffer, {
          contentType: file.mimetype,
          upsert: false,
        });

      if (error) throw new Error(`Upload failed: ${error.message}`);

      return {
        url: await this.getSignedUrl(filePath),
        key: filePath,
        metadata: {
          size: uploadBuffer.length,
          mimetype: file.mimetype,
          uploadedAt: new Date(),
        },
      };
    } catch (error: unknown) {
      this.handleUploadError(error);
    }
  }

  private async validateUpload(file: FileUpload, bucket: string) {
    const { data: bucketExists, error: bucketError } =
      await this.supabase.storage.getBucket(bucket);

    if (bucketError || !bucketExists) {
      throw new Error(
        `Bucket "${bucket}" não encontrado. Crie-o no painel do Supabase.`,
      );
    }

    if (!file.buffer || file.buffer.length === 0) {
      throw new Error('Arquivo vazio');
    }

    if (file.size > this.MAX_FILE_SIZE) {
      throw new Error(
        `Tamanho do arquivo excede o limite de ${this.MAX_FILE_SIZE} bytes`,
      );
    }

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
  }

  private generateFilePath(file: FileUpload): string {
    const getExtension = (): string => {
      const typeMap: Record<string, string> = {
        'image/jpeg': 'jpg',
        'image/png': 'png',
        'image/gif': 'gif',
        'image/webp': 'webp',
        'application/pdf': 'pdf',
      };
      return typeMap[file.mimetype] ?? 'bin';
    };

    const originalName = file.originalname ?? `file-${Date.now()}`;
    const sanitizedName = originalName
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9._-]/g, '-')
      .replace(/\.[^/.]+$/, '')
      .substring(0, 100);

    const fileExt =
      file.originalname?.split('.').pop()?.toLowerCase() ?? getExtension();
    const folder = file.mimetype.startsWith('image/') ? 'Images' : 'Pdfs';

    return `${folder}/${Date.now()}-${sanitizedName}.${fileExt}`;
  }

  private getOriginalFormat(mimetype: string): keyof sharp.FormatEnum {
    const formatMap: Record<string, keyof sharp.FormatEnum> = {
      'image/jpeg': 'jpeg',
      'image/jpg': 'jpeg',
      'image/png': 'png',
      'image/gif': 'gif',
      'image/webp': 'webp',
    };

    return formatMap[mimetype] || 'jpeg';
  }

  private async optimizeImage(
    buffer: Buffer,
    options: {
      quality: number;
      width?: number;
      height?: number;
      format?: keyof sharp.FormatEnum;
    },
  ): Promise<Buffer> {
    try {
      const image = sharp(buffer);

      try {
        const metadata = await image.metadata();
        if (!metadata.width || !metadata.height) {
          throw new Error('Imagem com dimensões inválidas');
        }
      } catch {
        console.warn('⚠️ Imagem com metadata inválida, usando original');
        return buffer;
      }

      return await image
        .rotate()
        .resize(options.width, options.height, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .toFormat(options.format || 'jpeg', {
          quality: options.quality,
        })
        .toBuffer();
    } catch {
      console.warn('❌ Erro na otimização, usando original');
      return buffer;
    }
  }

  private handleUploadError(error: unknown): never {
    if (error instanceof Error) {
      console.error('Storage upload error:', error);
      throw new Error(`Falha no armazenamento: ${error.message}`);
    }
    throw new Error('Ocorreu um erro desconhecido durante o upload');
  }

  async getFileStream(
    filePath: string,
    bucket?: string,
  ): Promise<FileStreamResult> {
    const targetBucket = bucket || this.bucketName;

    try {
      const { data: downloadData, error: downloadError } =
        await this.supabase.storage.from(targetBucket).download(filePath);

      if (downloadError || !downloadData) {
        throw new NotFoundException(`Arquivo não encontrado: ${filePath}`);
      }

      const stream = new Readable();
      stream.push(Buffer.from(await downloadData.arrayBuffer()));
      stream.push(null);

      return {
        stream,
        metadata: {
          contentType: 'application/octet-stream',
          contentLength: downloadData.size,
          originalName: filePath.split('/').pop() || 'file',
        },
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(
        `Erro ao obter o arquivo: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
      );
    }
  }

  async getFileBuffer(
    filePath: string,
    bucket?: string,
  ): Promise<FileBufferResult> {
    const targetBucket = bucket || this.bucketName;

    try {
      const { data, error } = await this.supabase.storage
        .from(targetBucket)
        .download(filePath);

      if (error) {
        console.error('❌ Erro do Supabase:', error);
        throw new Error(`Falha ao baixar arquivo: ${error.message}`);
      }

      if (!data) {
        throw new Error('Nenhum dado retornado do Supabase');
      }

      const buffer = Buffer.from(await data.arrayBuffer());

      const fileName = filePath.split('/').pop() || 'file.jpg';

      return {
        buffer,
        metadata: {
          contentType: 'image/jpeg',
          contentLength: buffer.length,
          originalName: fileName,
        },
      };
    } catch (error) {
      console.error('💥 Erro crítico no getFileBuffer:', error);
      throw error;
    }
  }

  async getSignedUrl(
    filePath: string,
    bucket?: string,
    expiresIn = 60 * 60 * 24 * 7, // 7d
  ): Promise<string> {
    const targetBucket = bucket || this.bucketName;

    const { data: signedUrlData, error } = await this.supabase.storage
      .from(targetBucket)
      .createSignedUrl(filePath, expiresIn);

    if (error || !signedUrlData?.signedUrl) {
      throw new Error(`Erro ao gerar URL assinada: ${error?.message}`);
    }

    return signedUrlData.signedUrl;
  }

  async deleteFile(filePath: string, bucket?: string): Promise<void> {
    const targetBucket = bucket || this.bucketName;

    const { error } = await this.supabase.storage
      .from(targetBucket)
      .remove([filePath]);

    if (error) {
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  }

  getFileUrl(filePath: string, bucket?: string): string {
    const targetBucket = bucket || this.bucketName;

    const {
      data: { publicUrl },
    } = this.supabase.storage.from(targetBucket).getPublicUrl(filePath);

    if (!publicUrl) {
      throw new Error('Failed to get public URL');
    }

    return publicUrl;
  }
}
