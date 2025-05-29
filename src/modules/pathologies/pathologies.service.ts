import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { LogHelperService } from '../logs/log-helper.service';
import { CreatePathologyDto } from '../pathologies/dto/create-pathology.dto';
import { SearchPathologyDto } from '../pathologies/dto/search-pathology.dto';
import { UpdatePathologyDto } from '../pathologies/dto/update-pathology.dto';
import { PathologyPhotoService } from '../pathology-photos/pathology-photos.service';

@Injectable()
export class PathologyService {
  constructor(
    private prisma: PrismaService,
    private logHelper: LogHelperService,
    private pathologyPhotoService: PathologyPhotoService,
  ) {}

  async create(createPathologyDto: CreatePathologyDto) {
    const { photos, ...pathologyData } = createPathologyDto;
    const pathology = await this.prisma.pathology.create({
      data: {
        ...pathologyData,
        recordDate: new Date(createPathologyDto.recordDate),
      },
      include: {
        project: {
          select: {
            id: true,
            upeCode: true,
          },
        },
        location: true,
      },
    });

    if (photos?.length) {
      await this.pathologyPhotoService.uploadPhotos(photos, pathology.id); // Corrigido para usar pathology.id
    }

    // await this.logHelper.createLog(userId, 'CREATE', 'Pathology', pathology.id);

    return pathology;
  }

  async findAll(projectId?: string) {
    const where: Prisma.PathologyWhereInput = {};
    if (projectId) where.projectId = projectId;

    return this.prisma.pathology.findMany({
      where,
      include: {
        project: {
          select: {
            id: true,
            upeCode: true,
          },
        },
        location: true,
      },
      orderBy: {
        recordDate: 'desc',
      },
    });
  }

  async search(searchPathologyDto: SearchPathologyDto) {
    const { title, description, startDate, endDate } = searchPathologyDto;

    const where: Prisma.PathologyWhereInput = {};

    if (title) where.title = { contains: title, mode: 'insensitive' };
    if (description)
      where.description = { contains: description, mode: 'insensitive' };
    if (startDate || endDate) {
      where.recordDate = {
        gte: startDate ? new Date(startDate) : undefined,
        lte: endDate ? new Date(endDate) : undefined,
      };
    }

    return this.prisma.pathology.findMany({
      where,
      include: {
        project: {
          select: {
            id: true,
            upeCode: true,
          },
        },
        location: true,
      },
    });
  }

  async findOne(id: string) {
    const pathology = await this.prisma.pathology.findUnique({
      where: { id },
      include: {
        project: {
          select: {
            id: true,
            upeCode: true,
          },
        },
        location: true,
      },
    });

    if (!pathology) {
      throw new NotFoundException('Patologia não encontrada');
    }

    return pathology;
  }

  async update(
    id: string,
    updatePathologyDto: UpdatePathologyDto,
    // userId: string,
  ) {
    const pathology = await this.prisma.pathology.update({
      where: { id },
      data: {
        ...updatePathologyDto,
        recordDate: updatePathologyDto.recordDate
          ? new Date(updatePathologyDto.recordDate)
          : undefined,
      },
      include: {
        project: {
          select: {
            id: true,
            upeCode: true,
          },
        },
        location: true,
      },
    });

    // await this.logHelper.createLog(userId, 'UPDATE', 'Pathology', pathology.id);

    return pathology;
  }

  async remove(id: string) {
    // const pathology = await this.findOne(id);

    await this.prisma.pathology.delete({ where: { id } });

    // await this.logHelper.createLog(userId, 'DELETE', 'Pathology', pathology.id);

    return;
  }
}
