import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateStateLawDto } from './dto/create-state-law.dto';
import { UpdateStateLawDto } from './dto/update-state-law.dto';

@Injectable()
export class StateLawService {
  constructor(private prisma: PrismaService) {}

  async create(createStateLawDto: CreateStateLawDto) {
    const stateLaw = await this.prisma.stateLaw.create({
      data: {
        ...createStateLawDto,
        publishedAt: new Date(createStateLawDto.publishedAt),
      },
    });

    return stateLaw;
  }

  async findAll(params: { state?: string; active?: boolean }) {
    const where: Prisma.StateLawWhereInput = {};
    if (params.state) where.state = params.state;
    if (params.active !== undefined) where.active = params.active;

    return this.prisma.stateLaw.findMany({
      where,
      orderBy: {
        state: 'asc',
      },
    });
  }

  async findOne(id: string) {
    const stateLaw = await this.prisma.stateLaw.findUnique({
      where: { id },
    });

    if (!stateLaw) {
      throw new NotFoundException('Legislação estadual não encontrada');
    }

    return stateLaw;
  }

  async update(id: string, updateStateLawDto: UpdateStateLawDto) {
    const stateLaw = await this.prisma.stateLaw.update({
      where: { id },
      data: {
        ...updateStateLawDto,
        publishedAt: updateStateLawDto.publishedAt
          ? new Date(updateStateLawDto.publishedAt)
          : undefined,
      },
    });

    return stateLaw;
  }

  async remove(id: string) {
    const stateLaw = await this.prisma.stateLaw.delete({
      where: { id },
    });

    return stateLaw;
  }
}
