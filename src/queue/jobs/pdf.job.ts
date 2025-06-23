import { Job } from 'bull';

export enum PdfJobType {
  GENERATE_ANEXO_M3 = 'generate-anexo-m3',
  GENERATE_ANEXO_M4 = 'generate-anexo-m4',
  GENERATE_ATESTADO = 'generate-atestado',
  GENERATE_LAUDO = 'generate-laudo-avaliacao',
  GENERATE_RELATORIO = 'generate-relatorio-fotografico',
}

interface PdfJobBase extends Job {
  name: PdfJobType;
  outputPath: string;
  templateData: any;
}

export type PdfJob = PdfJobBase;
