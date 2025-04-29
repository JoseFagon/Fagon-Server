import { Injectable, Logger } from '@nestjs/common';
import { Processor, Process } from '@nestjs/bull';
import sharp from 'sharp';
import { Job } from 'bull';
import {
  isResizeJob,
  isCompressJob,
  isConvertJob,
  ResizeImageJob,
  CompressImageJob,
  ConvertImageJob,
} from '../jobs/image.job';

type SafeResizeOptions = {
  fit?: keyof typeof sharp.fit;
  position?: keyof typeof sharp.gravity;
  background?: string | { r: number; g: number; b: number; alpha: number };
};

@Injectable()
@Processor('image')
export class ImageWorker {
  private readonly logger = new Logger(ImageWorker.name);

  @Process()
  async handleImageJob(job: Job): Promise<void> {
    try {
      if (isResizeJob(job)) {
        await this.handleResize(job);
      } else if (isCompressJob(job)) {
        await this.handleCompress(job);
      } else if (isConvertJob(job)) {
        await this.handleConvert(job);
      } else {
        this.logger.warn(`Job não reconhecido: ${job.name}`);
      }
    } catch (error: unknown) {
      const err = error as Error;
      this.logger.error(
        `Erro ao processar job (${job.name}): ${err.message}`,
        err.stack,
      );
      throw err;
    }
  }

  private async handleResize(job: ResizeImageJob): Promise<void> {
    if (!job.data || typeof job.data !== 'object') {
      throw new Error('Dados inválidos no job de resize.');
    }

    const { inputPath, outputPath, width, height } = job.data;
    const options = this.sanitizeResizeOptions(job.data.options);

    await sharp(inputPath).resize(width, height, options).toFile(outputPath);
    this.logger.log(`Imagem redimensionada salva em: ${outputPath}`);
  }

  private sanitizeResizeOptions(
    options: unknown,
  ): SafeResizeOptions | undefined {
    if (!options || typeof options !== 'object') return undefined;
    return options as SafeResizeOptions;
  }

  private async handleCompress(job: CompressImageJob) {
    const { inputPath, outputPath, quality } = job.data;

    await sharp(inputPath).jpeg({ quality }).toFile(outputPath);
    this.logger.log(`Imagem comprimida salva em: ${outputPath}`);
  }

  private async handleConvert(job: ConvertImageJob) {
    const { inputPath, outputPath, format } = job.data;

    await sharp(inputPath).toFormat(format).toFile(outputPath);
    this.logger.log(`Imagem convertida salva em: ${outputPath}`);
  }
}
