import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMaterialFinishingDto } from './dto/create-material-finishing.dto';
import { UpdateMaterialFinishingDto } from './dto/update-material-finishing.dto';
import { Prisma, SurfaceType } from '@prisma/client';
import { LocationFinishingInputDto } from './dto/location-finishing-input.dto';

@Injectable()
export class MaterialFinishingService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateMaterialFinishingDto) {
    return this.prisma.materialFinishing.create({
      data: createDto,
    });
  }

  async createBulk(locationId: string, finishes: LocationFinishingInputDto) {
    const materialFinishings = this.mapFinishesToMaterialFinishings(
      locationId,
      finishes,
    );

    await this.prisma.materialFinishing.deleteMany({
      where: { locationId },
    });

    return this.prisma.materialFinishing.createMany({
      data: materialFinishings,
    });
  }

  private mapFinishesToMaterialFinishings(
    locationId: string,
    finishes: LocationFinishingInputDto,
  ): Prisma.MaterialFinishingCreateManyInput[] {
    const createInput = (
      surface: SurfaceType,
      materials: string[] | undefined,
    ): Prisma.MaterialFinishingCreateManyInput[] => {
      if (!materials) return [];
      return materials.map(
        (material): Prisma.MaterialFinishingCreateManyInput => ({
          locationId,
          surface,
          materialFinishing: material,
        }),
      );
    };

    return [
      ...createInput(SurfaceType.piso, finishes.floor),
      ...createInput(SurfaceType.parede, finishes.wall),
      ...createInput(SurfaceType.forro, finishes.ceiling),
    ];
  }

  async findByLocation(locationId: string) {
    return this.prisma.materialFinishing.findMany({
      where: { locationId },
    });
  }

  async findOne(id: string) {
    const materialFinishing = await this.prisma.materialFinishing.findUnique({
      where: { id },
    });

    if (!materialFinishing) {
      throw new NotFoundException('Material finishing not found');
    }

    return materialFinishing;
  }

  async update(id: string, updateDto: UpdateMaterialFinishingDto) {
    await this.findOne(id);

    return this.prisma.materialFinishing.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.materialFinishing.delete({
      where: { id },
    });
  }
}
