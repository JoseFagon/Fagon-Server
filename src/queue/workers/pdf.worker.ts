import { Processor, Process } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { compile } from 'handlebars';
import path from 'path';
import fs from 'fs';
import puppeteer from 'puppeteer';
import { PdfJobType, PdfJob } from '../jobs/pdf.job';

@Injectable()
@Processor('pdf')
export class PdfWorker {
  private readonly logger = new Logger(PdfWorker.name);
  private readonly templatesDir = path.join(
    __dirname,
    '../../../../dist/modules/pdfs/templates',
  );

  constructor() {
    this.ensureTemplatesDirExists();
  }

  private ensureTemplatesDirExists() {
    if (!fs.existsSync(this.templatesDir)) {
      fs.mkdirSync(this.templatesDir, { recursive: true });
    }
  }

  private getTemplateName(jobType: PdfJobType): string {
    const templateMap = {
      [PdfJobType.GENERATE_ANEXO_M3]: 'anexo-m3',
      [PdfJobType.GENERATE_ANEXO_M4]: 'anexo-m4',
      [PdfJobType.GENERATE_ATESTADO]: 'atestado',
      [PdfJobType.GENERATE_LAUDO]: 'laudo-avaliacao',
      [PdfJobType.GENERATE_RELATORIO]: 'relatorio-fotografico',
    };
    return templateMap[jobType];
  }

  @Process()
  async handlePdfJob(job: PdfJob) {
    try {
      const templateName = this.getTemplateName(job.name);
      await this.generatePdfFromTemplate(
        templateName,
        job.templateData,
        job.outputPath,
      );
      this.logger.log(`PDF ${templateName} gerado em: ${job.outputPath}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(`Falha ao gerar PDF: ${error.message}`, error.stack);
      } else {
        this.logger.error(`Erro desconhecido ao gerar PDF`);
      }
      throw error;
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
