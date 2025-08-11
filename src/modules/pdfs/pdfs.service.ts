import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { StorageService } from '../../storage/storage.service';
import { generatePdfFromTemplate } from './utils/pdf-generator';
import { Location, PdfType, Photo } from '@prisma/client';
import { ProjectService } from '../projects/projects.service';
import { ProjectWithIncludes } from '../../common/interfaces/project-includes.interface';
import { LogHelperService } from '../logs/log-helper.service';
import { getPdfFileName } from '../../common/utils/pdf-naming-helper.utils';
import { StateLawService } from '../state-laws/state-laws.service';
import { optimizeImageForPdf } from './utils/image-optimizer';

interface LocationWithPhotos extends Location {
  photo: Photo[];
  materialFinishing?: string;
}

interface PhotoWithSignedUrl extends Photo {
  signedUrl: string;
}

interface LocationWithSignedUrls extends Location {
  photo: PhotoWithSignedUrl[];
  materialFinishing?: string;
}

@Injectable()
export class PdfService {
  constructor(
    private prisma: PrismaService,
    private storageService: StorageService,
    private projectService: ProjectService,
    private stateLawService: StateLawService,
    private logHelper: LogHelperService,
  ) {}

  async generatePdf(
    projectId: string,
    pdfType: string,
    currentUser: { sub: string; role: string },
  ) {
    if (currentUser.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para gerar PDF',
      );
    }

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

    const locationsWithSignedUrls = await this.getPhotosWithSignedUrls(
      project.location as unknown as LocationWithPhotos[],
    );

    const laws = await this.stateLawService.findByState(project.agency.state);

    const lastLocation = locationsWithSignedUrls
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .pop();

    const data = {
      agency: project.agency,
      engineer: project.engineer,
      inspectorName: project.inspectorName,
      inspectionDate: project.inspectionDate,
      structureType: project.structureType,
      floorHeight: project.floorHeight,
      createdAt: project.createdAt,
      now: new Date(),
      fireResistance,
      maxHeight,
      pavements: project.pavements,
      lastLocation: lastLocation,
      stateLaws: laws,
      location: locationsWithSignedUrls.map((location) => ({
        id: location.id,
        name: location.name,
        locationType: location.locationType,
        height: location.height,
        pavementId: location.pavementId,
        pavement:
          project.pavements.find((p) => p.id === location.pavementId) ?? null,
        materialFinishing: location.materialFinishing,
        photo: location.photo.map((p) => ({
          id: p.id,
          selectedForPdf: p.selectedForPdf,
          signedUrl: p.signedUrl,
        })),
      })),
    };

    console.log(data.pavements);

    const formatPdfType = pdfType.replace(/_/g, '-');
    const pdfBuffer = await generatePdfFromTemplate(formatPdfType, data);

    const file = {
      buffer: Buffer.from(pdfBuffer),
      originalname: getPdfFileName(
        pdfType as PdfType,
        project.projectType,
        project.agency.agencyNumber,
      ),
      mimetype: 'application/pdf',
      size: pdfBuffer.length,
    };

    const { key } = await this.storageService.uploadFile(file);

    const newPdf = await this.prisma.pdf.create({
      data: {
        projectId,
        filePath: key,
        generatedAt: new Date(),
        pdfType: pdfType as PdfType,
      },
    });

    await this.logHelper.createLog(currentUser.sub, 'CREATE', 'Pdf', newPdf.id);

    return newPdf;
  }

  async signPdf(
    id: string,
    signedFile: Express.Multer.File,
    currentUser: { sub: string; role: string },
  ) {
    if (currentUser.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para assinar PDF',
      );
    }

    const pdf = await this.getPdfById(id);
    if (!pdf) {
      throw new NotFoundException('PDF não encontrado');
    }

    const project = await this.projectService.findOne(pdf.projectId);
    if (!project) {
      throw new NotFoundException('Projeto não encontrado');
    }

    const uploadResult = await this.storageService.uploadFile({
      buffer: signedFile.buffer,
      originalname: getPdfFileName(
        pdf.pdfType,
        project.projectType,
        project.agency.agencyNumber,
        true,
      ),
      mimetype: 'application/pdf',
      size: signedFile.size,
    });

    return this.updateSignedPdf(id, uploadResult.key, currentUser);
  }

  async updateSignedPdf(
    pdfId: string,
    signedFilePath: string,
    currentUser: { sub: string; role: string },
  ) {
    if (currentUser.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para atualizar PDF',
      );
    }

    await this.logHelper.createLog(currentUser.sub, 'UPDATE', 'Pdf', pdfId);

    return this.prisma.pdf.update({
      where: { id: pdfId },
      data: { signedFilePath },
    });
  }

  async downloadPdf(id: string, currentUser?: { role: string }) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para fazer download do PDF',
      );
    }

    const pdf = await this.getPdfById(id, currentUser);

    if (!pdf) {
      throw new NotFoundException('PDF não encontrado');
    }

    try {
      const fileStream = await this.storageService.getFileStream(pdf.filePath);
      const project = await this.projectService.findOne(pdf.projectId);

      if (!project) {
        throw new NotFoundException('Projeto não encontrado');
      }

      return {
        fileStream,
        filename: getPdfFileName(
          pdf.pdfType,
          project.projectType,
          project.agency.agencyNumber,
        ),
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `Falha ao preparar o PDF para download: ${error.message}`,
        );
      }
    }
  }

  private calculateMaxHeight(project: ProjectWithIncludes): number {
    if (!project.pavements || project.pavements.length === 0) return 0;
    return Math.max(...project.pavements.map((p) => p.height ?? 0), 0);
  }

  private calculateFireResistance(project: ProjectWithIncludes): number {
    if (!project.pavements || project.pavements.length === 0) return 30;

    const pavements = project.pavements;

    const subsolos = pavements.filter((p) =>
      p.pavement.toLowerCase().includes('subsolo'),
    );

    const subsoloHeightSum = subsolos.reduce(
      (sum, p) => sum + (p.height ?? 0),
      0,
    );

    const anySubsoloOver10m = subsolos.some((p) => (p.height ?? 0) > 10);

    if (anySubsoloOver10m || subsoloHeightSum > 10) {
      return 90;
    }

    const hasOver6m = pavements.some((p) => (p.height ?? 0) > 6);

    if (subsolos.length > 0 || hasOver6m) {
      return 60;
    }

    return 30;
  }

  private async getPhotosWithSignedUrls(
    locations: LocationWithPhotos[],
  ): Promise<LocationWithSignedUrls[]> {
    return Promise.all(
      locations.map(async (location) => {
        const photosWithUrls: PhotoWithSignedUrl[] = await Promise.all(
          location.photo
            .filter((p): p is Photo => p.selectedForPdf !== undefined)
            .filter((p) => p.selectedForPdf)
            .map(async (p) => {
              const signedUrl = await this.storageService.getSignedUrl(
                p.filePath,
              );
              return {
                ...p,
                signedUrl: await optimizeImageForPdf(signedUrl),
              };
            }),
        );

        return {
          ...location,
          photo: photosWithUrls,
        };
      }),
    );
  }

  async getPdfById(id: string, currentUser?: { role: string }) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para visualizar PDF',
      );
    }

    const photo = await this.prisma.pdf.findUnique({
      where: { id },
    });

    if (!photo) {
      throw new NotFoundException('Pdf não encontrado');
    }

    return photo;
  }

  async findByProject(projectId: string, currentUser?: { role: string }) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para listar PDFs',
      );
    }

    return this.prisma.pdf.findMany({
      where: { projectId },
    });
  }

  async deletePdf(id: string, currentUser: { sub: string; role: string }) {
    if (currentUser.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para deletar PDF',
      );
    }

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
