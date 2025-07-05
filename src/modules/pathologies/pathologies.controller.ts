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
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { PathologyResponseDto } from './dto/response-pathology.dto';
import { CreatePathologyDto } from './dto/create-pathology.dto';
import { SearchPathologyDto } from './dto/search-pathology.dto';
import { UpdatePathologyDto } from './dto/update-pathology.dto';
import {
  CurrentUser,
  RequireAuth,
} from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import { PathologyService } from './pathologies.service';
import { JwtPayload } from '../../common/interfaces/jwt.payload.interface';
import { FilesInterceptor } from '@nestjs/platform-express';

@ApiTags('Pathologies')
@ApiBearerAuth()
@RequireAuth()
@Roles(ROLES.ADMIN, ROLES.FUNCIONARIO, ROLES.VISTORIADOR)
@Controller('pathologies')
export class PathologyController {
  constructor(private readonly pathologyService: PathologyService) {}

  @Post()
  @ApiOperation({ summary: 'Register a new pathology' })
  @ApiResponse({
    status: 201,
    type: PathologyResponseDto,
    description: 'Pathology successfully created',
  })
  @UseInterceptors(FilesInterceptor('photos'))
  create(
    @UploadedFiles() photos: Express.Multer.File[],
    @Body() createPathologyDto: Omit<CreatePathologyDto, 'photos'>,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.pathologyService.create(
      { ...createPathologyDto, photos },
      currentUser.sub,
    );
  }

  @Get()
  @ApiOperation({ summary: 'List all pathologies' })
  @ApiResponse({
    status: 200,
    type: [PathologyResponseDto],
    description: 'List of pathologies',
  })
  @ApiQuery({
    name: 'projectId',
    required: false,
    description: 'Filter by project ID',
  })
  findAll(@Query('projectId') projectId?: string) {
    return this.pathologyService.findAll(projectId);
  }

  @Get('search')
  @ApiOperation({ summary: 'Search pathologies with filters' })
  @ApiResponse({
    status: 200,
    type: [PathologyResponseDto],
    description: 'Search results',
  })
  search(@Query() searchParams: SearchPathologyDto) {
    return this.pathologyService.search(searchParams);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get pathology details' })
  @ApiResponse({
    status: 200,
    type: PathologyResponseDto,
    description: 'Pathology details',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.pathologyService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a pathology' })
  @ApiResponse({
    status: 200,
    type: PathologyResponseDto,
    description: 'Pathology updated',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePathologyDto: UpdatePathologyDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.pathologyService.update(
      id,
      updatePathologyDto,
      currentUser.sub,
    );
  }

  @Delete(':id')
  @Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
  @ApiOperation({ summary: 'Delete a pathology' })
  @ApiResponse({
    status: 204,
    description: 'Pathology successfully deleted',
  })
  remove(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.pathologyService.remove(id, currentUser);
  }
}
