import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LogHelperService } from '../logs/log-helper.service';
import { Prisma } from '@prisma/client';
import { PavementService } from '../pavements/pavements.service';
import { PhotoService } from '../photos/photos.service';
import { MaterialFinishingService } from '../material-finishings/material-finishings.service';
import { CreateMaterialFinishingDto } from '../material-finishings/dto/create-material-finishing.dto';
import { CreatePavementDto } from '../pavements/dto/create-pavement.dto';

@Injectable()
export class LocationService {
  constructor(
    private prisma: PrismaService,
    private photoService: PhotoService,
    private pavementService: PavementService,
    private materialFinishingService: MaterialFinishingService,
    private logHelper: LogHelperService,
  ) {}

  async create(createLocationDto: CreateLocationDto) {
    const { projectId, pavementId, ...locationData } = createLocationDto;

    await this.validateRelationsExist(projectId, pavementId);

    const location = await this.prisma.location.create({
      data: {
        ...locationData,
        project: { connect: { id: projectId } },
        pavement: pavementId ? { connect: { id: pavementId } } : undefined,
      },
    });

    // await this.logHelper.createLog(userId, 'CREATE', 'Location', location.id);

    return location;
  }

  async findByProject(projectId: string) {
    await this.validateProjectExists(projectId);

    return this.prisma.location.findMany({
      where: { projectId },
    });
  }

  async findByPavement(pavementId: string) {
    await this.validatePavementExists(pavementId);

    return this.prisma.location.findMany({
      where: { pavementId },
    });
  }

  async findOne(id: string) {
    const location = await this.prisma.location.findUnique({
      where: { id },
    });

    if (!location) {
      throw new NotFoundException('Location not found');
    }

    return location;
  }

  async update(
    id: string,
    updateLocationDto: UpdateLocationDto,
    // userId: string,
  ) {
    const location = await this.findOne(id);

    const { projectId, photos, pavement, materialFinishings, ...locationData } =
      updateLocationDto;
    const updateData: Prisma.LocationUpdateInput = { ...locationData };

    if (projectId && projectId !== location.projectId) {
      await this.validateProjectExists(projectId);
      updateData.project = { connect: { id: projectId } };
    }

    if (pavement) {
      await this.handlePavementUpdate(location.projectId, pavement);
    }

    const updatedLocation = await this.prisma.location.update({
      where: { id },
      data: updateData,
    });

    if (photos?.length) {
      await this.photoService.uploadPhotos(photos, id);
    }

    if (materialFinishings?.length) {
      await this.handleMaterialFinishingUpdate(id, materialFinishings);
    }

    // await this.logHelper.createLog(userId, 'UPDATE_LOCATION', 'Location', id);

    return updatedLocation;
  }

  private async handlePavementUpdate(
    projectId: string,
    pavementData: CreatePavementDto,
  ) {
    const existingPavement = await this.prisma.pavement.findFirst({
      where: {
        projectId,
        pavement: pavementData.pavement,
      },
    });

    if (existingPavement) {
      if (pavementData.height > existingPavement.height) {
        await this.prisma.pavement.update({
          where: { id: existingPavement.id },
          data: { height: pavementData.height },
        });
      }
    } else {
      await this.pavementService.create({
        ...pavementData,
        projectId,
      });
    }
  }

  private async handleMaterialFinishingUpdate(
    locationId: string,
    materialFinishingData: CreateMaterialFinishingDto[],
  ) {
    for (const mf of materialFinishingData) {
      await this.materialFinishingService.create({ ...mf, locationId });
    }
  }

  async remove(id: string) {
    await this.findOne(id);

    const deletedLocation = await this.prisma.location.delete({
      where: { id },
    });

    // await this.logHelper.createLog(userId, 'DELETE', 'Location', id);

    return deletedLocation;
  }

  private async validateRelationsExist(projectId: string, pavementId?: string) {
    await this.validateProjectExists(projectId);

    if (pavementId) {
      await this.validatePavementExists(pavementId);
    }
  }

  private async validateProjectExists(projectId: string) {
    const project = await this.prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      throw new NotFoundException('Project not found');
    }
  }

  private async validatePavementExists(pavementId: string) {
    const pavement = await this.prisma.pavement.findUnique({
      where: { id: pavementId },
    });

    if (!pavement) {
      throw new NotFoundException('Pavement not found');
    }
  }
}
