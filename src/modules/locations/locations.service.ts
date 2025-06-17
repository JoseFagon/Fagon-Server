import {
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LogHelperService } from '../logs/log-helper.service';
import { Prisma } from '@prisma/client';
import { PavementService } from '../pavements/pavements.service';
import { PhotoService } from '../photos/photos.service';
import { MaterialFinishingService } from '../material-finishings/material-finishings.service';
import { ProjectService } from '../projects/projects.service';

@Injectable()
export class LocationService {
  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => ProjectService))
    private projectService: ProjectService,
    @Inject(forwardRef(() => PavementService))
    private pavementService: PavementService,
    @Inject(forwardRef(() => PhotoService))
    private photoService: PhotoService,
    private materialFinishingService: MaterialFinishingService,
    private logHelper: LogHelperService,
  ) {}

  async create(
    createLocationDto: CreateLocationDto,
    // userId: string
  ) {
    const { projectId, ...locationData } = createLocationDto;

    await this.projectService.validateProjectExists(projectId);

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
    await this.projectService.validateProjectExists(projectId);

    return this.prisma.location.findMany({
      where: { projectId },
      include: {
        pavement: true,
      },
    });
  }

  async findByPavement(pavementId: string) {
    await this.pavementService.validatePavementExists(pavementId);

    return this.prisma.location.findMany({
      where: { pavementId },
    });
  }

  async findOne(id: string) {
    const location = await this.prisma.location.findUnique({
      where: { id },
      include: {
        pavement: true,
        materialFinishing: true,
        photo: true,
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

    const { photos, pavementId, finishes, height, ...locationData } =
      updateLocationDto;

    try {
      const updateData: Prisma.LocationUpdateInput = { ...locationData };

      if (pavementId) {
        await this.pavementService.validatePavementExists(pavementId);
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
        await this.pavementService.updatePavementHeight(pavementId, height);
      } else if (height !== undefined && location.pavement) {
        await this.pavementService.updatePavementHeight(
          location.pavement.id,
          height,
        );
      }

      if (photos?.length) {
        await this.photoService.uploadPhotos(photos, id).catch((error) => {
          console.error('Photo upload failed:', error);
          throw new Error(`Falha no upload de fotos: ${error.message}`);
        });
      }

      if (finishes) {
        await this.materialFinishingService
          .createBulk(id, finishes)
          .catch((error) => {
            console.error('Finishes update failed:', error);
            throw new Error(`Falha ao atualizar acabamentos: ${error.message}`);
          });
      }

      // await this.logHelper.createLog(userId, 'UPDATE_LOCATION', 'Location', id);

      return this.findOne(id);
    } catch (error) {
      console.error('Location update error:', error);
      throw new InternalServerErrorException('Falha ao atualizar localização');
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

  async validateLocationExists(locationId: string) {
    const location = await this.prisma.location.findUnique({
      where: { id: locationId },
    });

    if (!location) {
      throw new NotFoundException('Localização não encontrada');
    }
  }
}
