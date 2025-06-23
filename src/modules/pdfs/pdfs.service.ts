import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StorageService } from 'src/storage/storage.service';
import { generatePdfFromTemplate } from './utils/pdf-generator';
import { PdfType } from '@prisma/client';
import { ProjectService } from '../projects/projects.service';
import { ProjectWithIncludes } from 'src/common/interfaces/project-includes.interface';

@Injectable()
export class PdfService {
  constructor(
    private prisma: PrismaService,
    private storageService: StorageService,
    private projectService: ProjectService,
  ) {}

  async generatePdf(projectId: string, pdfType: string) {
    const project = (await this.projectService.findOne(
      projectId,
    )) as unknown as ProjectWithIncludes;

    if (!project) {
      throw new NotFoundException('Projeto não encontrado');
    }

    if (!Object.values(PdfType).includes(pdfType as PdfType)) {
      throw new Error(`Tipo de PDF inválido: ${pdfType}`);
    }

    const maxHeight = this.calculateMaxHeight(project);
    const fireResistance = this.calculateFireResistance(project);

    const data = {
      agency: project.agency,
      engineer: project.engineer,
      createdAt: project.createdAt,
      now: new Date(),
      fireResistance,
      maxHeight,
      pavement: project.pavement,
      locations: project.location.map((location) => ({
        id: location.id,
        name: location.name,
        locationType: location.locationType,
        height: location.height,
        materialFinishing: location.materialFinishing,
        photo: location.photo
          .filter((p) => p.selectedForPdf)
          .map((p) => ({
            id: p.id,
            filePath: p.filePath,
            selectedForPdf: p.selectedForPdf,
          })),
      })),
    };

    const formatPdfType = pdfType.replace(/_/g, '-');
    const pdfBuffer = await generatePdfFromTemplate(formatPdfType, data);

    const file = {
      buffer: pdfBuffer,
      originalname: `${pdfType}-${project.agency.agencyNumber}-${project.upeCode}.pdf`,
      mimetype: 'application/pdf',
      size: pdfBuffer.length,
    };

    const { key } = await this.storageService.uploadFile(file);

    return this.prisma.pdf.create({
      data: {
        projectId,
        filePath: key,
        generatedAt: new Date(),
        pdfType: pdfType as PdfType,
      },
    });
  }

  async signPdf(id: string, signedFile: Express.Multer.File) {
    const pdf = await this.getPdfById(id);

    if (!pdf) {
      throw new NotFoundException('PDF não encontrado');
    }

    const uploadResult = await this.storageService.uploadFile(
      {
        buffer: signedFile.buffer,
        originalname: `${pdf.pdfType}-signed.pdf`,
        mimetype: 'application/pdf',
        size: signedFile.size,
      },
      'signed-pdfs',
    );

    return this.updateSignedPdf(id, uploadResult.key);
  }

  async updateSignedPdf(pdfId: string, signedFilePath: string) {
    return this.prisma.pdf.update({
      where: { id: pdfId },
      data: { signedFilePath },
    });
  }

  async downloadPdf(id: string) {
    const pdf = await this.getPdfById(id);

    if (!pdf) {
      throw new NotFoundException('PDF não encontrado');
    }

    const fileStream = await this.storageService.getFileStream(pdf.filePath);

    return {
      fileStream,
      filename: `${pdf.pdfType}-${pdf.projectId}.pdf`,
    };
  }

  private calculateMaxHeight(project: ProjectWithIncludes): number {
    if (!project.pavement || project.pavement.length === 0) return 0;
    return Math.max(...project.pavement.map((p) => p.height ?? 0), 0);
  }

  private calculateFireResistance(project: ProjectWithIncludes): number {
    if (!project.pavement || project.pavement.length === 0) return 30;

    const hasSubsolo = project.pavement.some((p) =>
      p.pavement.toLowerCase().includes('subsolo'),
    );

    const hasOver6m = project.pavement.some((p) => (p.height ?? 0) > 6);

    return hasSubsolo || hasOver6m ? 60 : 30;
  }

  async getPdfById(id: string) {
    return this.prisma.pdf.findUnique({
      where: { id },
    });
  }

  async findByProject(projectId: string) {
    return this.prisma.pdf.findMany({
      where: { projectId },
    });
  }

  async deletePdf(id: string) {
    const pdf = await this.getPdfById(id);
    if (!pdf) {
      throw new NotFoundException('PDF não encontrado');
    }

    await this.storageService.deleteFile(pdf.filePath);

    if (pdf.signedFilePath) {
      await this.storageService.deleteFile(pdf.signedFilePath);
    }

    return this.prisma.pdf.delete({
      where: { id },
    });
  }
}
