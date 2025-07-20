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
import { AgencyService } from './agencies.service';
import { AgencyResponseDto } from './dto/response-agency.dto';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { SearchAgencyDto } from './dto/search-agency.dto';
import {
  CurrentUser,
  RequireAuth,
} from '../../common/decorators/current-user.decorator';
import { JwtPayload } from '../../common/interfaces/jwt.payload.interface';
import { UpdateAgencyDto } from './dto/update-agency.dto';

@ApiTags('Agencies')
@ApiBearerAuth()
@RequireAuth()
@Controller('agencies')
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new agency' })
  @ApiResponse({
    status: 201,
    type: AgencyResponseDto,
    description: 'Agency successfully created',
  })
  @ApiBody({ type: CreateAgencyDto })
  create(
    @Body() createAgencyDto: CreateAgencyDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.agencyService.create(createAgencyDto, currentUser);
  }

  @Get()
  @CacheKey('agencies_all')
  @CacheTTL(30)
  @ApiOperation({ summary: 'List all agencies' })
  @ApiResponse({
    status: 200,
    type: [AgencyResponseDto],
    description: 'List of agencies',
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
    return this.agencyService.findAll({ page, limit }, currentUser);
  }

  @Get('search')
  @ApiOperation({ summary: 'Search agencies with filters' })
  @ApiResponse({
    status: 200,
    description: 'Search results with pagination metadata',
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: { $ref: getSchemaPath(AgencyResponseDto) },
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
    @Query() searchParams: SearchAgencyDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.agencyService.search(searchParams, currentUser);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an agency by ID' })
  @ApiParam({ name: 'id', description: 'Agency UUID' })
  @ApiResponse({
    status: 200,
    type: AgencyResponseDto,
    description: 'Agency found',
  })
  @ApiResponse({
    status: 404,
    description: 'Agency not found',
  })
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.agencyService.findOne(id, currentUser);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an agency' })
  @ApiParam({ name: 'id', description: 'Agency UUID' })
  @ApiBody({ type: UpdateAgencyDto })
  @ApiResponse({
    status: 200,
    type: AgencyResponseDto,
    description: 'Agency updated',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAgencyDto: UpdateAgencyDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.agencyService.update(id, updateAgencyDto, currentUser);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an agency' })
  @ApiParam({ name: 'id', description: 'Agency UUID' })
  @ApiResponse({
    status: 204,
    description: 'Agency deleted',
  })
  remove(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.agencyService.remove(id, currentUser);
  }
}
