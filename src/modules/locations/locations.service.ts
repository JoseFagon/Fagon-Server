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
    const { projectId, ...locationData } = createLocationDto;

    await this.validateProjectExists(projectId);

    const location = await this.prisma.location.create({
      data: {
        ...locationData,
        project: { connect: { id: projectId } },
      },
    });

    // await this.logHelper.createLog(userId, 'CREATE', 'Location', location.id);

    return location;
  }

  async findByProject(projectId: string) {
    await this.validateProjectExists(projectId);

    return this.prisma.location.findMany({
      where: { projectId },
      include: {
        pavement: true,
      },
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
      include: {
        pavement: true,
      },
    });

    if (!location) {
      throw new NotFoundException('Location not found');
    }

    return location;
  }

  async update(
    id: string,
    updateLocationDto: UpdateLocationDto,
    // userId: string
  ) {
    const location = await this.findOne(id);

    const {
      photos,
      existingPhotos,
      pavementId,
      materialFinishings,
      height,
      ...locationData
    } = updateLocationDto;

    const updateData: Prisma.LocationUpdateInput = {
      ...locationData,
    };

    if (pavementId) {
      await this.validatePavementExists(pavementId);
      updateData.pavement = { connect: { id: pavementId } };
    }

    if (height !== undefined) {
      updateData.height = height;
    }

    await this.prisma.location.update({
      where: { id },
      data: updateData,
    });

    if (pavementId && height !== undefined) {
      await this.updatePavementHeight(pavementId, height);
    } else if (height !== undefined && location.pavement) {
      await this.updatePavementHeight(location.pavement.id, height);
    }

    if (photos?.length) {
      await this.photoService.uploadPhotos(photos, id);
    }

    if (existingPhotos?.length) {
      await this.handleExistingPhotos(existingPhotos, id);
    }

    if (materialFinishings?.length) {
      await this.handleMaterialFinishingUpdate(id, materialFinishings);
    }

    // await this.logHelper.createLog(userId, 'UPDATE_LOCATION', 'Location', id);

    return this.findOne(id);
  }

  private async updatePavementHeight(pavementId: string, newHeight: number) {
    const pavement = await this.pavementService.findOne(pavementId);

    const currentHeight = pavement.height ?? 0;

    if (newHeight > currentHeight) {
      await this.pavementService.update(pavementId, { height: newHeight });
    } else {
      const locations = await this.findByPavement(pavementId);
      const maxHeight = Math.max(...locations.map((l) => l.height ?? 0));

      if (maxHeight !== currentHeight) {
        await this.pavementService.update(pavementId, { height: maxHeight });
      }
    }
  }

  private async handleExistingPhotos(photoIds: string[], locationId: string) {
    await this.prisma.photo.updateMany({
      where: {
        id: { in: photoIds },
        locationId,
      },
      data: { locationId },
    });
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
    const location = await this.findOne(id);

    if (location.pavement) {
      const locations = await this.findByPavement(location.pavement.id);
      const otherLocations = locations.filter((l) => l.id !== id);

      if (otherLocations.length > 0) {
        const maxHeight = Math.max(...otherLocations.map((l) => l.height || 0));
        await this.pavementService.update(location.pavement.id, {
          height: maxHeight,
        });
      } else {
        await this.pavementService.update(location.pavement.id, { height: 0 });
      }
    }

    const deletedLocation = await this.prisma.location.delete({
      where: { id },
    });

    // await this.logHelper.createLog(userId, 'DELETE', 'Location', id);

    return deletedLocation;
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
