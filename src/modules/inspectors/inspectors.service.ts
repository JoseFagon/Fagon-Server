import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { LogHelperService } from '../logs/log-helper.service';
import { CreateInspectorDto } from './dto/create-inspector.dto';
import { SearchInspectorDto } from './dto/search-inspector.dto';
import { UpdateInspectorDto } from './dto/update-inspector.dto';

@Injectable()
export class InspectorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logHelper: LogHelperService,
  ) {}

  async create(
    createInspectorDto: CreateInspectorDto,
    currentUser: { sub: string; role: string },
  ) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para criar outros vistoriadores',
      );
    }

    const inspector = await this.prisma.inspector.create({
      data: createInspectorDto,
    });

    if (currentUser?.sub) {
      await this.logHelper.createLog(
        currentUser.sub,
        'CREATE',
        'Inspector',
        inspector.id,
      );
    }

    return inspector;
  }

  async findAll(
    { page = 1, limit = 10 }: { page?: number; limit?: number },
    currentUser?: { role: string },
  ) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para listar outros vistoriadores',
      );
    }

    const skip = (page - 1) * limit;
    const [inspectors, total] = await this.findAllInspectorsPaginated(
      skip,
      limit,
    );

    return {
      inspectors: inspectors,
      meta: {
        resource: {
          total,
          page,
          limit,
          totalPages: Math.ceil(Number(total) / limit),
        },
      },
    };
  }

  async search(params: SearchInspectorDto, currentUser?: { role: string }) {
    const { name, city, state, selectedCities, page = 1, limit = 10 } = params;

    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para pesquisar outros vistoriadores',
      );
    }

    const orFilters: Prisma.InspectorWhereInput[] = [];

    if (name) {
      orFilters.push({
        name: {
          contains: name,
          mode: 'insensitive',
        },
      });
    }

    if (city) {
      orFilters.push({
        city: {
          contains: city,
          mode: 'insensitive',
        },
      });
    }

    if (state) {
      orFilters.push({
        state: {
          contains: state,
          mode: 'insensitive',
        },
      });
    }

    const whereClause: Prisma.InspectorWhereInput = {};

    if (orFilters.length > 0) {
      whereClause.OR = orFilters;
    }

    if (selectedCities && selectedCities.length > 0) {
      whereClause.selectedCities = { hasSome: selectedCities };
    }

    const skip = (page - 1) * limit;
    const [inspectors, total] = await Promise.all([
      this.prisma.inspector.findMany({
        where: whereClause,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.inspector.count({ where: whereClause }),
    ]);

    return {
      inspectors: inspectors,
      meta: {
        resource: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      },
    };
  }

  async findOne(id: string, currentUser?: { role: string }) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para visualizar outros vistoriadores',
      );
    }

    const inspector = await this.prisma.inspector.findUnique({
      where: { id },
    });

    if (!inspector) {
      throw new NotFoundException('Inspector not found');
    }

    return inspector;
  }

  async update(
    id: string,
    updateInspectorDto: UpdateInspectorDto,
    currentUser: { sub: string; role: string },
  ) {
    if (currentUser.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para atualizar outros vistoriadores',
      );
    }

    await this.findOne(id, currentUser);

    const updatedInspector = await this.prisma.inspector.update({
      where: { id },
      data: updateInspectorDto,
    });

    return updatedInspector;
  }

  async remove(id: string, currentUser: { sub: string; role: string }) {
    if (currentUser.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para deletar outros vistoriadores',
      );
    }

    await this.findOne(id, currentUser);

    const deletedInspector = await this.prisma.inspector.delete({
      where: { id },
    });

    if (currentUser.sub) {
      await this.logHelper.createLog(
        currentUser.sub,
        'DELETE',
        'Inspector',
        id,
      );
    }

    return deletedInspector;
  }

  async findAllInspectorsPaginated(skip: number, take: number) {
    const [inspectors, total] = await Promise.all([
      this.prisma.inspector.findMany({
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.inspector.count(),
    ]);

    return [inspectors, total];
  }
}
