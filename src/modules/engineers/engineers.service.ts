import {
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEngineerDto } from './dto/create-engineer.dto';
import { UpdateEngineerDto } from './dto/update-engineer.dto';
import { SearchEngineerDto } from './dto/search-engineer.dto';
import { Prisma } from '@prisma/client';
import { UserService } from '../users/users.service';
import * as argon2 from 'argon2';
import { ROLES } from 'src/common/constants/roles.constant';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from 'src/config/env-config.class';

@Injectable()
export class EngineerService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    @Inject(ConfigService)
    private configService: ConfigService<EnvConfig, true>,
  ) {}

  async create(createEngineerDto: CreateEngineerDto) {
    const { email, name, ...engineerData } = createEngineerDto;

    const existingEngineer = await this.prisma.engineer.findUnique({
      where: { email },
    });

    if (existingEngineer) {
      throw new ConflictException('Já existe um engenheiro com este email');
    }

    return this.prisma.$transaction(async (prisma) => {
      let user = await this.userService.findByEmail(email, prisma);

      const defaultPassword = this.configService.get('EMPLOYEES_PASSWORD', {
        infer: true,
      });
      const adminEmails = this.configService.get('ADMIN_EMAILS', {
        infer: true,
      });

      if (user) {
        if (!user.status) {
          user = await prisma.user.update({
            where: { id: user.id },
            data: {
              status: true,
              name: name,
            },
          });
        }
        if (user.role !== ROLES.ADMIN) {
          user = await prisma.user.update({
            where: { id: user.id },
            data: {
              name: name,
              role: ROLES.FUNCIONARIO,
            },
          });
        }
      } else {
        const isAdmin = adminEmails.includes(email);
        const role = isAdmin ? ROLES.ADMIN : ROLES.FUNCIONARIO;

        const hashedPassword = await argon2.hash(defaultPassword);
        user = await prisma.user.create({
          data: {
            email,
            name,
            password: hashedPassword,
            role,
            status: true,
          },
        });
      }

      const engineer = await prisma.engineer.create({
        data: {
          ...engineerData,
          email,
          name,
        },
      });

      return engineer;
    });
  }

  async findAll(
    { page = 1, limit = 10 }: { page?: number; limit?: number },
    currentUser?: { role: string },
  ) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para listar engenheiros',
      );
    }

    const skip = (page - 1) * limit;
    const [engineers, total] = await this.findAllEngineersPaginated(
      skip,
      limit,
    );

    return {
      engineers,
      meta: {
        resource: {
          total: total,
          page: page,
          limit: limit,
          totalPages: Math.ceil(Number(total) / limit),
        },
      },
    };
  }

  async search(
    searchEngineerDto: SearchEngineerDto,
    currentUser?: { role: string },
  ) {
    const {
      name,
      education,
      registrationNumber,
      page = 1,
      limit = 10,
    } = searchEngineerDto;

    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para pesquisar engenheiros',
      );
    }

    const where: Prisma.EngineerWhereInput = {};

    if (name) where.name = { contains: name, mode: 'insensitive' };

    if (education)
      where.education = { contains: education, mode: 'insensitive' };

    if (registrationNumber)
      where.registrationNumber = { equals: registrationNumber };

    const skip = (page - 1) * limit;
    const [engineers, total] = await Promise.all([
      this.prisma.engineer.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.engineer.count(),
    ]);

    return {
      engineers: engineers,
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

  async findOne(id: string) {
    return this.prisma.engineer.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateEngineerDto: UpdateEngineerDto) {
    const engineer = await this.prisma.engineer.findUnique({
      where: { id },
    });

    if (!engineer) {
      throw new NotFoundException('Engenheiro não encontrado');
    }

    return this.prisma.$transaction(async (prisma) => {
      const updatedEngineer = await prisma.engineer.update({
        where: { id },
        data: updateEngineerDto,
      });

      if (
        updateEngineerDto.email &&
        updateEngineerDto.email !== engineer.email
      ) {
        const user = await prisma.user.findUnique({
          where: { email: engineer.email },
        });

        if (user) {
          await prisma.user.update({
            where: { id: user.id },
            data: { email: updateEngineerDto.email },
          });
        }
      }

      return updatedEngineer;
    });
  }

  async remove(id: string) {
    const engineer = await this.prisma.engineer.findUnique({
      where: { id },
    });

    if (!engineer) {
      throw new NotFoundException('Engenheiro não encontrado');
    }

    return this.prisma.$transaction(async (prisma) => {
      const deletedEngineer = await prisma.engineer.delete({
        where: { id },
      });

      await this.userService.disableByEmail(engineer.email, prisma);

      return deletedEngineer;
    });
  }

  async validateEngineerExists(engineerId: string) {
    const engineer = await this.prisma.engineer.findUnique({
      where: { id: engineerId },
    });
    if (!engineer) {
      throw new NotFoundException('Engineer not found');
    }
  }

  async findAllEngineersPaginated(skip: number, take: number) {
    const [engineers, total] = await Promise.all([
      this.prisma.engineer.findMany({
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.engineer.count(),
    ]);

    return [engineers, total];
  }
}
