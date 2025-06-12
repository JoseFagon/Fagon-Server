import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { SearchAgencyDto } from './dto/search-agency.dto';
import { LogHelperService } from '../logs/log-helper.service';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class AgencyService {
  constructor(
    private prisma: PrismaService,
    private logHelper: LogHelperService,
  ) {}

  async create(createAgencyDto: CreateAgencyDto) {
    const agency = await this.prisma.agency.create({
      data: createAgencyDto,
    });

    // await this.logHelper.createLog(userId, 'CREATE', 'Agency', agency.id);

    return agency;
  }

  async findAll({ page, limit }: { page: number; limit: number }) {
    const skip = (page - 1) * limit;
    return this.prisma.agency.findMany({
      skip,
      take: limit,
    });
  }

  async search(searchAgencyDto: SearchAgencyDto) {
    const { name, agencyNumber, state, city, district } = searchAgencyDto;

    const orFilters: Prisma.AgencyWhereInput[] = [];

    if (name) {
      orFilters.push({ name: { contains: name, mode: 'insensitive' } });
    }
    if (agencyNumber) {
      const agencyNumberInt = parseInt(agencyNumber, 10);
      orFilters.push({ agencyNumber: { equals: agencyNumberInt } });
    }
    if (state) {
      orFilters.push({ state: { startsWith: state, mode: 'insensitive' } });
    }
    if (city) {
      orFilters.push({ city: { startsWith: city, mode: 'insensitive' } });
    }
    if (district) {
      orFilters.push({
        district: { startsWith: district, mode: 'insensitive' },
      });
    }

    const whereClause = orFilters.length > 0 ? { OR: orFilters } : {};

    return this.prisma.agency.findMany({
      where: whereClause,
    });
  }

  async findOne(id: string) {
    return this.prisma.agency.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateAgencyDto: UpdateAgencyDto) {
    await this.findOne(id);

    const updatedAgency = await this.prisma.agency.update({
      where: { id },
      data: updateAgencyDto,
    });

    // await this.logHelper.createLog(userId, 'UPDATE', 'Agency', id);

    return updatedAgency;
  }

  async remove(id: string) {
    const deletedAgency = await this.prisma.agency.delete({
      where: { id },
    });

    // await this.logHelper.createLog(userId, 'DELETE', 'Agency', id);

    return deletedAgency;
  }

  async validateAgencyExists(agencyId: string) {
    const agency = await this.prisma.agency.findUnique({
      where: { id: agencyId },
    });
    if (!agency) {
      throw new NotFoundException('Agency not found');
    }
  }
}
