import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEngineerDto } from './dto/create-engineer.dto';
import { UpdateEngineerDto } from './dto/update-engineer.dto';
import { SearchEngineerDto } from './dto/search-engineer.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class EngineerService {
  constructor(private prisma: PrismaService) {}

  async create(createEngineerDto: CreateEngineerDto) {
    return this.prisma.engineer.create({
      data: createEngineerDto,
    });
  }

  async findAll({ page, limit }: { page: number; limit: number }) {
    const skip = (page - 1) * limit;
    return this.prisma.engineer.findMany({
      skip,
      take: limit,
    });
  }

  async search(searchEngineerDto: SearchEngineerDto) {
    const { name, education, registrationNumber } = searchEngineerDto;

    const where: Prisma.EngineerWhereInput = {};

    if (name) where.name = { contains: name, mode: 'insensitive' };
    if (education)
      where.education = { contains: education, mode: 'insensitive' };
    if (registrationNumber)
      where.registrationNumber = { equals: registrationNumber };

    return this.prisma.engineer.findMany({
      where,
    });
  }

  async findOne(id: string) {
    return this.prisma.engineer.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateEngineerDto: UpdateEngineerDto) {
    return this.prisma.engineer.update({
      where: { id },
      data: updateEngineerDto,
    });
  }

  async remove(id: string) {
    return this.prisma.engineer.delete({
      where: { id },
    });
  }
}
