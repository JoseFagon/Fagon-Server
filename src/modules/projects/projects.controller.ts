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
import { RequireAuth } from 'src/common/decorators/current-user.decorator';

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
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
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
  @Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
  @ApiOperation({ summary: 'Update project information' })
  @ApiResponse({
    status: 200,
    type: ProjectResponseDto,
    description: 'Project updated',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  @Roles(ROLES.ADMIN)
  @ApiOperation({ summary: 'Delete a project' })
  @ApiResponse({
    status: 204,
    description: 'Project deleted',
  })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.projectService.remove(id);
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
