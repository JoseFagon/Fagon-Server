import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorator';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectResponseDto } from './dto/response-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectService } from './projects.service';
import { ROLES } from 'src/common/constants/roles.constant';
import { SearchProjectDto } from './dto/search-project.dto';
import {
  CurrentUser,
  RequireAuth,
} from 'src/common/decorators/current-user.decorator';
import { JwtPayload } from 'src/common/interfaces/jwt.payload.interface';

@ApiTags('Projects')
@ApiBearerAuth()
@RequireAuth()
@Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new project' })
  @ApiResponse({
    status: 201,
    type: ProjectResponseDto,
    description: 'Project created successfully',
  })
  create(
    @Body() createProjectDto: CreateProjectDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.projectService.create(createProjectDto, currentUser.sub);
  }

  @Get()
  @ApiOperation({ summary: 'Get all projects with filters' })
  @ApiResponse({
    status: 200,
    type: [ProjectResponseDto],
    description: 'List of projects',
  })
  findAll(@Query() filters: SearchProjectDto) {
    return this.projectService.findAll(filters);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get project details' })
  @ApiResponse({
    status: 200,
    type: ProjectResponseDto,
    description: 'Project details',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.projectService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update project information' })
  @ApiResponse({
    status: 200,
    type: ProjectResponseDto,
    description: 'Project updated',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProjectDto: UpdateProjectDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.projectService.update(id, updateProjectDto, currentUser.sub);
  }

  @Delete(':id')
  @Roles(ROLES.ADMIN)
  @ApiOperation({ summary: 'Delete a project' })
  @ApiResponse({
    status: 204,
    description: 'Project deleted',
  })
  remove(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.projectService.remove(id, currentUser.sub);
  }

  @Get(':id/pavements')
  @ApiOperation({ summary: 'Get project pavements' })
  getPavements(@Param('id', ParseUUIDPipe) id: string) {
    return this.projectService.getProjectPavements(id);
  }

  @Get(':id/pathologies')
  @ApiOperation({ summary: 'Get project pathologies' })
  getPathologies(@Param('id', ParseUUIDPipe) id: string) {
    return this.projectService.getProjectPathologies(id);
  }
}
