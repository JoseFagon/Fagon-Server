import * as mime from 'mime-types';
import * as crypto from 'crypto';
import * as path from 'path';
import * as fs from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import { promisify } from 'util';
import { pipeline } from 'stream';
import { BadRequestException } from '@nestjs/common';

const pipelineAsync = promisify(pipeline);

export class FileUtils {
  static async fileExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  static async ensureDirectoryExists(dirPath: string): Promise<void> {
    try {
      await fs.mkdir(dirPath, { recursive: true });
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'EEXIST') throw error;
    }
  }

  static async readFile(filePath: string): Promise<string> {
    return await fs.readFile(filePath, 'utf-8');
  }

  static async writeFile(filePath: string, content: string): Promise<void> {
    await this.ensureDirectoryExists(path.dirname(filePath));
    await fs.writeFile(filePath, content, 'utf-8');
  }

  static async deleteFile(filePath: string): Promise<void> {
    if (await this.fileExists(filePath)) {
      await fs.unlink(filePath);
    }
  }

  static async copyFile(source: string, destination: string): Promise<void> {
    await this.ensureDirectoryExists(path.dirname(destination));
    await pipelineAsync(
      createReadStream(source),
      createWriteStream(destination),
    );
  }

  static async moveFile(source: string, destination: string): Promise<void> {
    await this.ensureDirectoryExists(path.dirname(destination));
    await fs.rename(source, destination);
  }

  static getFileExtension(filename: string): string {
    return path.extname(filename).toLowerCase();
  }

  static generateUniqueFilename(originalFilename: string): string {
    const ext = this.getFileExtension(originalFilename);
    const timestamp = Date.now();
    const randomString = crypto.randomBytes(4).toString('hex');
    return `${timestamp}_${randomString}${ext}`;
  }

  static validateFileType(
    filePath: string,
    allowedMimeTypes: string[],
  ): Promise<boolean> {
    const mimeType = mime.lookup(filePath) as string;
    if (typeof mimeType === 'string') {
      return Promise.resolve(allowedMimeTypes.includes(mimeType));
    }
    return Promise.resolve(false);
  }

  static async validateFileSize(
    filePath: string,
    maxSizeInBytes: number,
  ): Promise<boolean> {
    const stats = await fs.stat(filePath);
    return stats.size <= maxSizeInBytes;
  }

  static async saveUploadedFile(
    file: Express.Multer.File,
    destinationDir: string,
    allowedTypes: string[] = [],
    maxSize: number = 10 * 1024 * 1024, // 10MB
  ): Promise<string> {
    if (file.size > maxSize) {
      throw new BadRequestException(
        `File size exceeds the limit of ${maxSize} bytes`,
      );
    }

    const mimeType = mime.lookup(file.originalname) as string;
    if (
      allowedTypes.length > 0 &&
      (typeof mimeType !== 'string' || !allowedTypes.includes(mimeType))
    ) {
      throw new BadRequestException(
        `Invalid file type. Allowed types: ${allowedTypes.join(', ')}`,
      );
    }

    await this.ensureDirectoryExists(destinationDir);

    const uniqueFilename = this.generateUniqueFilename(file.originalname);
    const destinationPath = path.join(destinationDir, uniqueFilename);

    if (!Buffer.isBuffer(file.buffer)) {
      throw new BadRequestException('Invalid file buffer');
    }

    try {
      await fs.writeFile(destinationPath, file.buffer);
      return destinationPath;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new BadRequestException(`Failed to save file: ${error.message}`);
      }
      throw new BadRequestException('Failed to save file due to unknown error');
    }
  }

  static async listFiles(
    dirPath: string,
    extensions?: string[],
  ): Promise<string[]> {
    try {
      const files = await fs.readdir(dirPath);

      if (!extensions || extensions.length === 0) {
        return files;
      }

      return files.filter((file) => {
        const ext = this.getFileExtension(file);
        return extensions.includes(ext);
      });
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        return [];
      }
      throw error;
    }
  }
}
