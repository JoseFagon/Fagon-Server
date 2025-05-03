import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateMaterialFinishingDto } from './dto/create-material-finishing.dto';
import { UpdateMaterialFinishingDto } from './dto/update-material-finishing.dto';

@Injectable()
export class MaterialFinishingService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateMaterialFinishingDto) {
    const materialFinishing = await this.prisma.materialFinishing.create({
      data: createDto,
      include: {
        location: true,
      },
    });

    return materialFinishing;
  }

  async findByLocation(locationId: string) {
    return this.prisma.materialFinishing.findMany({
      where: { locationId },
      include: {
        location: true,
      },
    });
  }

  async findOne(id: string) {
    const materialFinishing = await this.prisma.materialFinishing.findUnique({
      where: { id },
      include: {
        location: true,
      },
    });

    if (!materialFinishing) {
      throw new NotFoundException('Acabamento material não encontrado');
    }

    return materialFinishing;
  }

  async update(id: string, updateDto: UpdateMaterialFinishingDto) {
    await this.findOne(id);

    const updated = await this.prisma.materialFinishing.update({
      where: { id },
      data: updateDto,
      include: {
        location: true,
      },
    });

    return updated;
  }

  async remove(id: string) {
    await this.prisma.materialFinishing.delete({ where: { id } });
  }
}
