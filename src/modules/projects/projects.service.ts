import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { SearchProjectDto } from './dto/search-project.dto';
import { Prisma } from '@prisma/client';
import { LogHelperService } from '../logs/log-helper.service';

@Injectable()
export class ProjectService {
  constructor(
    private prisma: PrismaService,
    private logHelper: LogHelperService,
  ) {}

  async create(createProjectDto: CreateProjectDto, userId: string) {
    const { agencyId, engineerId, ...projectData } = createProjectDto;

    await this.validateRelationsExist(agencyId, engineerId);

    const project = await this.prisma.project.create({
      data: {
        ...projectData,
        agency: { connect: { id: agencyId } },
        engineer: { connect: { id: engineerId } },
      },
      include: this.projectIncludes(),
    });

    await this.logHelper.createLog(userId, 'CREATE', 'Project', project.id);

    return project;
  }

  async findAll(filters: SearchProjectDto) {
    const {
      status,
      projectType,
      agencyId,
      engineerId,
      page = 1,
      limit = 10,
    } = filters;

    const where = {};
    if (status) where['status'] = status;
    if (projectType) where['projectType'] = projectType;
    if (agencyId) where['agencyId'] = agencyId;
    if (engineerId) where['engineerId'] = engineerId;

    const [projects, total] = await Promise.all([
      this.prisma.project.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        include: this.projectIncludes(),
      }),
      this.prisma.project.count({ where }),
    ]);

    return {
      data: projects,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    const project = await this.prisma.project.findUnique({
      where: { id },
      include: this.projectIncludes(),
    });

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    return project;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto, userId: string) {
    await this.findOne(id);

    const { agencyId, engineerId, ...projectData } = updateProjectDto;
    const updateData: Prisma.ProjectUpdateInput = { ...projectData };

    if (agencyId) {
      await this.validateAgencyExists(agencyId);
      updateData.agency = { connect: { id: agencyId } };
    }

    if (engineerId) {
      await this.validateEngineerExists(engineerId);
      updateData.engineer = { connect: { id: engineerId } };
    }

    const updatedProject = await this.prisma.project.update({
      where: { id },
      data: updateData,
      include: this.projectIncludes(),
    });

    await this.logHelper.createLog(userId, 'UPDATE', 'Project', id);

    return updatedProject;
  }

  async remove(id: string, userId: string) {
    await this.findOne(id);

    const project = await this.prisma.project.update({
      where: { id },
      data: { status: 'cancelado' },
    });

    await this.logHelper.createLog(userId, 'CANCEL', 'Project', id);

    return project;
  }

  async getProjectPavements(id: string) {
    await this.findOne(id);
    return this.prisma.pavement.findMany({
      where: { projectId: id },
    });
  }

  async getProjectPathologies(id: string) {
    await this.findOne(id);
    return this.prisma.pathology.findMany({
      where: { projectId: id },
    });
  }

  private projectIncludes() {
    return {
      agency: {
        select: {
          id: true,
          name: true,
          agency_number: true,
        },
      },
      engineer: {
        select: {
          id: true,
          name: true,
          specialty: true,
        },
      },
    };
  }

  private async validateRelationsExist(agencyId: string, engineerId: string) {
    await Promise.all([
      this.validateAgencyExists(agencyId),
      this.validateEngineerExists(engineerId),
    ]);
  }

  private async validateAgencyExists(agencyId: string) {
    const agency = await this.prisma.agency.findUnique({
      where: { id: agencyId },
    });
    if (!agency) {
      throw new NotFoundException('Agency not found');
    }
  }

  private async validateEngineerExists(engineerId: string) {
    const engineer = await this.prisma.engineer.findUnique({
      where: { id: engineerId },
    });
    if (!engineer) {
      throw new NotFoundException('Engineer not found');
    }
  }
}
