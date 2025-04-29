import { Job } from 'bull';

export enum PdfJobType {
  GENERATE_ANEXO_M3 = 'generate-anexo-m3',
  GENERATE_ANEXO_M4 = 'generate-anexo-m4',
  GENERATE_ATESTADO = 'generate-atestado-materiais',
  GENERATE_LAUDO = 'generate-laudo-avaliacao',
  GENERATE_RELATORIO = 'generate-relatorio-fotografico',
}

interface PdfJobBase extends Job {
  outputPath: string;
}

export interface GenerateAnexoM3Job extends PdfJobBase {
  templateData: any;
}

export interface GenerateAnexoM4Job extends PdfJobBase {
  templateData: any;
}

export interface GenerateAtestadoJob extends PdfJobBase {
  items: string[];
}

export interface GenerateLaudoJob extends PdfJobBase {
  inspectionData: any;
}

export interface GenerateRelatorioJob extends PdfJobBase {
  photos: string[];
}

export type PdfJob =
  | GenerateAnexoM3Job
  | GenerateAnexoM4Job
  | GenerateAtestadoJob
  | GenerateLaudoJob
  | GenerateRelatorioJob;
