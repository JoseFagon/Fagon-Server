import { Injectable, Logger } from '@nestjs/common';
import { Processor, Process } from '@nestjs/bull';
import { PdfJobType, PdfJob } from '../jobs/pdf.job';
import { compile } from 'handlebars';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import * as puppeteer from 'puppeteer';
import path from 'path';

@Injectable()
@Processor('pdf')
export class PdfWorker {
  private readonly logger = new Logger(PdfWorker.name);
  private readonly templatesDir = path.join(
    __dirname,
    '../../../../modules/pdfs/pdf-templates',
  );

  constructor() {
    this.ensureTemplatesDirExists();
  }

  private ensureTemplatesDirExists() {
    if (!fs.existsSync(this.templatesDir)) {
      fs.mkdirSync(this.templatesDir, { recursive: true });
    }
  }

  @Process(PdfJobType.GENERATE_ANEXO_M3)
  async handleAnexoM3(job: PdfJob) {
    if ((job.name as PdfJobType) !== PdfJobType.GENERATE_ANEXO_M3) return;

    try {
      const outputPath = job.data.outputPath as string;

      await this.generatePdfFromTemplate(
        'anexo-m3',
        job.data.templateData,
        outputPath,
      );
      this.logger.log(`Anexo M3 gerado em: ${job.data.outputPath}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(
          `Falha ao gerar Anexo M3: ${error.message}`,
          error.stack,
        );
      } else {
        this.logger.error(`Erro desconhecido ao gerar Anexo M3`);
      }
    }
  }

  @Process(PdfJobType.GENERATE_ANEXO_M4)
  async handleAnexoM4(job: PdfJob) {
    if ((job.name as PdfJobType) !== PdfJobType.GENERATE_ANEXO_M4) return;

    try {
      const outputPath = job.data.outputPath as string;

      await this.generatePdfFromTemplate(
        'anexo-m4',
        job.data.templateData,
        outputPath,
      );
      this.logger.log(`Anexo M4 gerado em: ${job.data.outputPath}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(
          `Falha ao gerar Anexo M4: ${error.message}`,
          error.stack,
        );
      } else {
        this.logger.error(`Erro desconhecido ao gerar Anexo M4`);
      }
    }
  }

  @Process(PdfJobType.GENERATE_ATESTADO)
  async handleAtestadoMateriais(job: PdfJob) {
    if ((job.name as PdfJobType) !== PdfJobType.GENERATE_ATESTADO) return;

    try {
      const outputPath = job.data.outputPath as string;

      const doc: PDFKit.PDFDocument = new PDFDocument();
      const stream = fs.createWriteStream(outputPath);
      doc.pipe(stream);

      doc.fontSize(16).text('Atestado de Materiais', { align: 'center' });
      doc.moveDown();

      job.data.items.forEach((item) => {
        doc.fontSize(12).text(`• ${item}`);
        doc.moveDown(0.5);
      });

      doc.end();

      await new Promise<void>((resolve, reject) => {
        stream.on('finish', () => resolve());
        stream.on('error', reject);
      });

      this.logger.log(`Atestado gerado em: ${job.data.outputPath}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(
          `Falha ao gerar Atestado de Materiais: ${error.message}`,
          error.stack,
        );
      } else {
        this.logger.error(`Erro desconhecido ao gerar Atestado de Materiais`);
      }
    }
  }

  @Process(PdfJobType.GENERATE_LAUDO)
  async handleLaudoAvaliacao(job: PdfJob) {
    if ((job.name as PdfJobType) !== PdfJobType.GENERATE_LAUDO) return;

    try {
      const outputPath = job.data.outputPath as string;

      const doc = new PDFDocument();
      const stream = fs.createWriteStream(outputPath);
      doc.pipe(stream);

      doc.fontSize(16).text('Laudo de Avaliação', { align: 'center' });
      doc.moveDown();

      doc.fontSize(12).text(`Data: ${new Date().toLocaleDateString()}`);
      doc.moveDown();

      if (job.data.inspectionData) {
        doc.text('Dados da Inspeção:');
        doc.moveDown(0.5);
        doc.text(JSON.stringify(job.data.inspectionData, null, 2));
      }

      doc.end();

      await new Promise<void>((resolve, reject) => {
        stream.on('finish', () => resolve());
        stream.on('error', reject);
      });

      this.logger.log(`Laudo gerado em: ${job.data.outputPath}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(
          `Falha ao gerar Laudo de Avaliação: ${error.message}`,
          error.stack,
        );
      } else {
        this.logger.error(`Erro desconhecido ao gerar Laudo de Avaliação`);
      }
    }
  }

  @Process(PdfJobType.GENERATE_RELATORIO)
  async handleRelatorioFotografico(job: PdfJob) {
    if ((job.name as PdfJobType) !== PdfJobType.GENERATE_RELATORIO) return;

    try {
      const outputPath = job.data.outputPath as string;

      const doc = new PDFDocument();
      const stream = fs.createWriteStream(outputPath);
      doc.pipe(stream);

      doc.fontSize(16).text('Relatório Fotográfico', { align: 'center' });
      doc.moveDown();

      for (const photoPath of job.data.photos) {
        if (typeof photoPath === 'string' && fs.existsSync(photoPath)) {
          doc.image(photoPath, { width: 500, align: 'center' });
          doc.moveDown();
          doc.text(`Foto: ${path.basename(photoPath)}`, { align: 'center' });
          doc.addPage();
        } else {
          this.logger.error(
            `Caminho inválido ou foto não encontrada: ${photoPath}`,
          );
        }
      }

      doc.end();

      await new Promise<void>((resolve, reject) => {
        stream.on('finish', () => resolve());
        stream.on('error', reject);
      });

      this.logger.log(
        `Relatório fotográfico gerado em: ${job.data.outputPath}`,
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(
          `Falha ao gerar Relatório Fotográfico: ${error.message}`,
          error.stack,
        );
      } else {
        this.logger.error(`Erro desconhecido ao gerar Relatório Fotográfico`);
      }
    }
  }

  private async generatePdfFromTemplate(
    templateName: string,
    data: any,
    outputPath: string,
  ) {
    const templatePath = path.join(this.templatesDir, `${templateName}.hbs`);

    if (!fs.existsSync(templatePath)) {
      throw new Error(
        `Template ${templateName} não encontrado em ${templatePath}`,
      );
    }

    const templateContent = fs.readFileSync(templatePath, 'utf-8');
    const template = compile(templateContent);
    const html = template(data);

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
      const page = await browser.newPage();
      await page.setContent(html);
      await page.pdf({
        path: outputPath,
        format: 'A4',
        margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },
      });
    } finally {
      await browser.close();
    }
  }
}
