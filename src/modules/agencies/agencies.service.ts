import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
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

  async create(
    createAgencyDto: CreateAgencyDto,
    currentUser: { sub: string; role: string },
  ) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para criar agências',
      );
    }

    const agency = await this.prisma.agency.create({
      data: createAgencyDto,
    });

    await this.logHelper.createLog(
      currentUser?.sub,
      'CREATE',
      'Agency',
      agency.id,
    );

    return agency;
  }

  async findAll(
    { page, limit }: { page: number; limit: number },
    currentUser?: { role: string },
  ) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para listar agências',
      );
    }

    const skip = (page - 1) * limit;
    return this.prisma.agency.findMany({
      skip,
      take: limit,
    });
  }

  async search(
    params: Partial<SearchAgencyDto>,
    currentUser?: { role: string },
  ) {
    const {
      name,
      agencyNumber,
      state,
      city,
      district,
      page = 1,
      limit = 10,
    } = params;

    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para pesquisar agências',
      );
    }

    const skip = (page - 1) * limit;
    const orFilters: Prisma.AgencyWhereInput[] = [];

    if (name) {
      orFilters.push({
        name: {
          contains: name,
          mode: 'insensitive',
        },
      });
    }

    if (agencyNumber && !isNaN(Number(agencyNumber))) {
      orFilters.push({
        agencyNumber: {
          equals: Number(agencyNumber),
        },
      });
    }

    if (state) {
      orFilters.push({
        state: {
          startsWith: state,
          mode: 'insensitive',
        },
      });
    }

    if (city) {
      orFilters.push({
        city: {
          startsWith: city,
          mode: 'insensitive',
        },
      });
    }

    if (district) {
      orFilters.push({
        district: {
          startsWith: district,
          mode: 'insensitive',
        },
      });
    }

    const whereClause = orFilters.length > 0 ? { OR: orFilters } : {};

    const [agencies, total] = await Promise.all([
      this.prisma.agency.findMany({
        where: whereClause,
        skip,
        take: limit,
      }),
      this.prisma.agency.count({ where: whereClause }),
    ]);

    return {
      data: agencies,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string, currentUser?: { role: string }) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para selecionar agência',
      );
    }

    return this.prisma.agency.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateAgencyDto: UpdateAgencyDto,
    currentUser: { sub: string; role: string },
  ) {
    if (currentUser.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para atualizar agência',
      );
    }

    await this.findOne(id);

    const updatedAgency = await this.prisma.agency.update({
      where: { id },
      data: updateAgencyDto,
    });

    await this.logHelper.createLog(currentUser.sub, 'UPDATE', 'Agency', id);

    return updatedAgency;
  }

  async remove(id: string, currentUser: { sub: string; role: string }) {
    if (currentUser.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para deletar agência',
      );
    }

    const deletedAgency = await this.prisma.agency.delete({
      where: { id },
    });

    await this.logHelper.createLog(currentUser.sub, 'DELETE', 'Agency', id);

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
