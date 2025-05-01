import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { SearchAgencyDto } from './dto/search-agency.dto';
import { Prisma } from 'src/generated/@prisma/client';

@Injectable()
export class AgencyService {
  constructor(private prisma: PrismaService) {}

  async create(createAgencyDto: CreateAgencyDto) {
    return this.prisma.agency.create({
      data: createAgencyDto,
    });
  }

  async findAll({ page, limit }: { page: number; limit: number }) {
    const skip = (page - 1) * limit;
    return this.prisma.agency.findMany({
      skip,
      take: limit,
    });
  }

  async search(searchAgencyDto: SearchAgencyDto) {
    const { name, agencyNumber, state, city } = searchAgencyDto;

    const where: Prisma.AgencyWhereInput = {};

    if (name) where.name = { contains: name, mode: 'insensitive' };
    if (agencyNumber) {
      const agencyNumberInt = parseInt(agencyNumber, 10);
      where.agencyNumber = { equals: agencyNumberInt };
    }
    if (state) where.state = { equals: state, mode: 'insensitive' };
    if (city) where.city = { equals: city, mode: 'insensitive' };

    return this.prisma.agency.findMany({
      where,
    });
  }

  async findOne(id: string) {
    return this.prisma.agency.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateAgencyDto: UpdateAgencyDto) {
    return this.prisma.agency.update({
      where: { id },
      data: updateAgencyDto,
    });
  }

  async remove(id: string) {
    return this.prisma.agency.delete({
      where: { id },
    });
  }
}
