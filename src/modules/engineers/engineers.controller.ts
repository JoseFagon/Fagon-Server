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
import { EngineerResponseDto } from './dto/response-engineer.dto';
import { CreateEngineerDto } from './dto/create-engineer.dto';
import { SearchEngineerDto } from './dto/search-engineer.dto';
import { UpdateEngineerDto } from './dto/update-engineer.dto';
import { RequireAuth } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import { EngineerService } from './engineers.service';

@ApiTags('Engineers')
@ApiBearerAuth()
@RequireAuth()
@Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
@Controller('engineers')
export class EngineerController {
  constructor(private readonly engineerService: EngineerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new engineer' })
  @ApiResponse({
    status: 201,
    type: EngineerResponseDto,
    description: 'Engineer successfully created',
  })
  @ApiBody({ type: CreateEngineerDto })
  create(@Body() createEngineerDto: CreateEngineerDto) {
    return this.engineerService.create(createEngineerDto);
  }

  @Get()
  @CacheKey('engineers_all')
  @CacheTTL(30)
  @ApiOperation({ summary: 'List all engineers' })
  @ApiResponse({
    status: 200,
    type: [EngineerResponseDto],
    description: 'List of engineers',
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
    return this.engineerService.findAll({ page, limit });
  }

  @Get('search')
  @ApiOperation({ summary: 'Search engineers with filters' })
  @ApiResponse({
    status: 200,
    type: [EngineerResponseDto],
    description: 'Search results',
  })
  search(@Query() searchParams: SearchEngineerDto) {
    return this.engineerService.search(searchParams);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an engineer by ID' })
  @ApiParam({ name: 'id', description: 'Engineer UUID' })
  @ApiResponse({
    status: 200,
    type: EngineerResponseDto,
    description: 'Engineer found',
  })
  @ApiResponse({
    status: 404,
    description: 'Engineer not found',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.engineerService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an engineer' })
  @ApiParam({ name: 'id', description: 'Engineer UUID' })
  @ApiBody({ type: UpdateEngineerDto })
  @ApiResponse({
    status: 200,
    type: EngineerResponseDto,
    description: 'Engineer updated',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEngineerDto: UpdateEngineerDto,
  ) {
    return this.engineerService.update(id, updateEngineerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an engineer' })
  @ApiParam({ name: 'id', description: 'Engineer UUID' })
  @ApiResponse({
    status: 204,
    description: 'Engineer deleted',
  })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.engineerService.remove(id);
  }
}
