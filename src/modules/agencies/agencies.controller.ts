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
} from '@nestjs/swagger';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { AgencyService } from './agencies.service';
import { AgencyResponseDto } from './dto/response-agency.dto';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { SearchAgencyDto } from './dto/search-agency.dto';
import {
  // CurrentUser,
  RequireAuth,
} from 'src/common/decorators/current-user.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { ROLES } from 'src/common/constants/roles.constant';
// import { JwtPayload } from 'src/common/interfaces/jwt.payload.interface';

@ApiTags('Agencies')
@ApiBearerAuth()
@RequireAuth()
@Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
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
    // @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.agencyService.create(createAgencyDto);
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
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.agencyService.findAll({ page, limit });
  }

  @Get('search')
  @ApiOperation({ summary: 'Search agencies with filters' })
  @ApiResponse({
    status: 200,
    type: [AgencyResponseDto],
    description: 'Search results',
  })
  search(@Query() searchParams: SearchAgencyDto) {
    return this.agencyService.search(searchParams);
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
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.agencyService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an agency' })
  @ApiParam({ name: 'id', description: 'Agency UUID' })
  @ApiBody({ type: CreateAgencyDto })
  @ApiResponse({
    status: 200,
    type: AgencyResponseDto,
    description: 'Agency updated',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAgencyDto: CreateAgencyDto,
    // @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.agencyService.update(id, updateAgencyDto);
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
    // @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.agencyService.remove(id);
  }
}
