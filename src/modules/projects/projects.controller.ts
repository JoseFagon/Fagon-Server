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
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
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
import { JwtAuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@ApiTags('Projects')
@ApiBearerAuth()
@RequireAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new project' })
  @ApiResponse({
    status: 201,
    type: ProjectResponseDto,
    description: 'Project successfully created',
  })
  create(
    @Body() createProjectDto: CreateProjectDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.projectService.create(createProjectDto, currentUser);
  }

  @Get()
  @ApiOperation({ summary: 'Get paginated list of projects' })
  @ApiResponse({
    status: 200,
    type: [ProjectResponseDto],
    description: 'List of projects',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of items per page',
  })
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.projectService.findAll({ page, limit }, currentUser);
  }

  @Get('search')
  @ApiOperation({ summary: 'Search projects with filters' })
  @ApiResponse({
    status: 200,
    type: [ProjectResponseDto],
    description: 'Search results',
  })
  search(
    @Query() searchParams: SearchProjectDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.projectService.search(searchParams, currentUser);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get project details by ID' })
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
    description: 'Project successfully updated',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProjectDto: UpdateProjectDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.projectService.update(id, updateProjectDto, currentUser);
  }

  @Delete(':id')
  @Roles(ROLES.ADMIN)
  @ApiOperation({ summary: 'Delete a project' })
  @ApiResponse({
    status: 204,
    description: 'Project successfully deleted',
  })
  remove(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.projectService.remove(id, currentUser);
  }

  @Get(':id/pavements')
  @ApiOperation({ summary: 'Get pavements of a project' })
  getPavements(@Param('id', ParseUUIDPipe) id: string) {
    return this.projectService.getProjectPavements(id);
  }

  @Get(':id/pathologies')
  @ApiOperation({ summary: 'Get pathologies of a project' })
  getPathologies(@Param('id', ParseUUIDPipe) id: string) {
    return this.projectService.getProjectPathologies(id);
  }
}
