import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StorageService } from 'src/storage/storage.service';
import { generatePdfFromTemplate } from './utils/pdf-generator';
import { PdfType } from '@prisma/client';
import {
  Project,
  Location,
  Pavement,
  MaterialFinishing,
  Photo,
  Agency,
  Engineer,
} from '@prisma/client';

interface ProjectWithRelations extends Project {
  agency: Agency;
  engineer: Engineer;
  locations: (Location & {
    photos: Photo[];
    pavement: Pavement | null;
    materialFinishing: MaterialFinishing | null;
  })[];
}

@Injectable()
export class PdfService {
  constructor(
    private prisma: PrismaService,
    private storageService: StorageService,
  ) {}

  async generatePdf(projectId: string, templateName: string, pdfType: string) {
    const project = await this.prisma.project.findUnique({
      where: { id: projectId },
      include: {
        agency: true,
        engineer: true,
        location: {
          include: {
            photo: true,
            pavement: true,
            materialFinishing: true,
          },
        },
      },
    });

    if (!project) {
      throw new Error('Projeto não encontrado');
    }

    const typedProject = project as unknown as ProjectWithRelations;

    const pavements = typedProject.locations
      .map((loc) => loc.pavement)
      .filter((p): p is Pavement => p !== null);

    const maxHeight = Math.max(...pavements.map((p) => p.height ?? 0), 0);

    const hasSubsolo = pavements.some((p) =>
      p.pavement.toLowerCase().includes('subsolo'),
    );

    const hasOver6m = pavements.some((p) => (p.height ?? 0) > 6);

    const fireResistance = hasSubsolo || hasOver6m ? 60 : 30;

    const data = {
      agency: typedProject.agency,
      engineer: typedProject.engineer,
      createdAt: typedProject.createdAt,
      now: new Date(),
      fireResistance,
      maxHeight,
      locations: typedProject.locations.map((location) => ({
        id: location.id,
        name: location.name,
        locationType: location.locationType,
        height: location.height,
        pavement: location.pavement,
        materialFinishings: location.materialFinishing,
        photos: location.photos
          .filter((photo) => photo.selectedForPdf)
          .map((photo) => ({
            id: photo.id,
            filePath: photo.filePath,
            selectedForPdf: photo.selectedForPdf,
          })),
      })),
    };

    const pdfBuffer = await generatePdfFromTemplate(templateName, data);

    const file = {
      buffer: pdfBuffer,
      originalname: `${projectId}-${Date.now()}.pdf`,
      mimetype: 'application/pdf',
      size: pdfBuffer.length,
    };

    const { key } = await this.storageService.uploadFile(file, 'pdfs');

    if (!Object.values(PdfType).includes(pdfType as PdfType)) {
      throw new Error(`Tipo de PDF inválido: ${pdfType}`);
    }

    return this.prisma.pdf.create({
      data: {
        projectId,
        filePath: key,
        generatedAt: new Date(),
        pdfType: pdfType as PdfType,
      },
    });
  }

  async updateSignedPdf(pdfId: string, signedFilePath: string) {
    return this.prisma.pdf.update({
      where: { id: pdfId },
      data: { signedFilePath },
    });
  }

  async findByProject(projectId: string) {
    return this.prisma.pdf.findMany({
      where: { projectId },
    });
  }
}
