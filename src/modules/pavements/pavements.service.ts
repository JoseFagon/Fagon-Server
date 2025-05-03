import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePavementDto } from './dto/create-pavement.dto';
import { UpdatePavementDto } from './dto/update-pavement.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PavementService {
  constructor(private prisma: PrismaService) {}

  async create(createPavementDto: CreatePavementDto) {
    const { projectId, ...pavementData } = createPavementDto;

    await this.validateProjectExists(projectId);

    const pavement = await this.prisma.pavement.create({
      data: {
        ...pavementData,
        project: { connect: { id: projectId } },
      },
    });

    return pavement;
  }

  async findByProject(projectId: string) {
    await this.validateProjectExists(projectId);

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

  private async validateProjectExists(projectId: string) {
    const project = await this.prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      throw new NotFoundException('Project not found');
    }
  }
}
