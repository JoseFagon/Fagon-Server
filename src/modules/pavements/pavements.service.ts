import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePavementDto } from './dto/create-pavement.dto';
import { UpdatePavementDto } from './dto/update-pavement.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LocationService } from '../locations/locations.service';
import { ProjectService } from '../projects/projects.service';

@Injectable()
export class PavementService {
  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => ProjectService))
    private projectService: ProjectService,
    @Inject(forwardRef(() => LocationService))
    private locationService: LocationService,
  ) {}

  async create(createPavementDto: CreatePavementDto) {
    const { projectId, ...pavementData } = createPavementDto;

    await this.projectService.validateProjectExists(projectId);

    const pavement = await this.prisma.pavement.create({
      data: {
        ...pavementData,
        project: { connect: { id: projectId } },
      },
    });

    return pavement;
  }

  async findByProject(projectId: string) {
    await this.projectService.validateProjectExists(projectId);

    return this.prisma.pavement.findMany({
      where: { projectId },
    });
  }

  async findOne(id: string) {
    const pavement = await this.prisma.pavement.findUnique({
      where: { id },
    });

    if (!pavement) {
      throw new NotFoundException('Pavement not found');
    }

    return pavement;
  }

  async update(id: string, updatePavementDto: UpdatePavementDto) {
    await this.findOne(id);

    const updatedPavement = await this.prisma.pavement.update({
      where: { id },
      data: updatePavementDto,
    });

    return updatedPavement;
  }

  async remove(id: string) {
    const deletedPavement = await this.prisma.pavement.delete({
      where: { id },
    });

    return deletedPavement;
  }

  async updatePavementHeight(pavementId: string, newHeight: number) {
    const pavement = await this.findOne(pavementId);

    const currentHeight = pavement.height ?? 0;

    if (newHeight > currentHeight) {
      await this.update(pavementId, { height: newHeight });
    } else {
      const locations = await this.locationService.findByPavement(pavementId);
      const maxHeight = Math.max(...locations.map((l) => l.height ?? 0));

      if (maxHeight !== currentHeight) {
        await this.update(pavementId, { height: maxHeight });
      }
    }
  }

  async validatePavementExists(pavementId: string) {
    const pavement = await this.prisma.pavement.findUnique({
      where: { id: pavementId },
    });

    if (!pavement) {
      throw new NotFoundException('Pavement not found');
    }
  }
}
