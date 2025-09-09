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
  ApiQuery,
  ApiParam,
  ApiBody,
  getSchemaPath,
} from '@nestjs/swagger';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { InspectorService } from './inspectors.service';
import { CreateInspectorDto } from './dto/create-inspector.dto';
import { SearchInspectorDto } from './dto/search-inspector.dto';
import { UpdateInspectorDto } from './dto/update-inspector.dto';
import {
  CurrentUser,
  RequireAuth,
} from '../../common/decorators/current-user.decorator';
import { JwtPayload } from '../../common/interfaces/jwt.payload.interface';

@ApiTags('Inspectors')
@ApiBearerAuth()
@RequireAuth()
@Controller('inspectors')
export class InspectorController {
  constructor(private readonly inspectorService: InspectorService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new inspector' })
  @ApiResponse({
    status: 201,
    description: 'Inspector successfully created',
  })
  @ApiBody({ type: CreateInspectorDto })
  create(
    @Body() createInspectorDto: CreateInspectorDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.inspectorService.create(createInspectorDto, currentUser);
  }

  @Get()
  @CacheKey('inspectors_all')
  @CacheTTL(30)
  @ApiOperation({ summary: 'List all inspectors' })
  @ApiResponse({
    status: 200,
    description: 'List of inspectors',
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
    return this.inspectorService.findAll({ page, limit }, currentUser);
  }

  @Get('search')
  @ApiOperation({ summary: 'Search inspectors with filters' })
  @ApiResponse({
    status: 200,
    description: 'Search results with pagination metadata',
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: { $ref: getSchemaPath(CreateInspectorDto) },
        },
        meta: {
          type: 'object',
          properties: {
            total: { type: 'number' },
            page: { type: 'number' },
            limit: { type: 'number' },
            totalPages: { type: 'number' },
          },
        },
      },
    },
  })
  search(
    @Query() searchParams: SearchInspectorDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.inspectorService.search(searchParams, currentUser);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an inspector by ID' })
  @ApiParam({ name: 'id', description: 'Inspector UUID' })
  @ApiResponse({
    status: 200,
    description: 'Inspector found',
  })
  @ApiResponse({
    status: 404,
    description: 'Inspector not found',
  })
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.inspectorService.findOne(id, currentUser);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an inspector' })
  @ApiParam({ name: 'id', description: 'Inspector UUID' })
  @ApiBody({ type: UpdateInspectorDto })
  @ApiResponse({
    status: 200,
    description: 'Inspector updated',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateInspectorDto: UpdateInspectorDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.inspectorService.update(id, updateInspectorDto, currentUser);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an inspector' })
  @ApiParam({ name: 'id', description: 'Inspector UUID' })
  @ApiResponse({
    status: 204,
    description: 'Inspector deleted',
  })
  remove(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.inspectorService.remove(id, currentUser);
  }
}
