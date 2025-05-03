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
  @ApiOperation({ summary: 'Cria um novo engenheiro' })
  @ApiResponse({
    status: 201,
    type: EngineerResponseDto,
    description: 'Engenheiro criado com sucesso',
  })
  @ApiBody({ type: CreateEngineerDto })
  create(@Body() createEngineerDto: CreateEngineerDto) {
    return this.engineerService.create(createEngineerDto);
  }

  @Get()
  @CacheKey('engineers_all')
  @CacheTTL(30)
  @ApiOperation({ summary: 'Lista todos os engenheiros' })
  @ApiResponse({
    status: 200,
    type: [EngineerResponseDto],
    description: 'Lista de engenheiros',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Página para paginação',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Limite de itens por página',
  })
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.engineerService.findAll({ page, limit });
  }

  @Get('search')
  @ApiOperation({ summary: 'Busca engenheiros com filtros' })
  @ApiResponse({
    status: 200,
    type: [EngineerResponseDto],
    description: 'Resultados da busca',
  })
  search(@Query() searchParams: SearchEngineerDto) {
    return this.engineerService.search(searchParams);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtém um engenheiro por ID' })
  @ApiParam({ name: 'id', description: 'UUID do engenheiro' })
  @ApiResponse({
    status: 200,
    type: EngineerResponseDto,
    description: 'Engenheiro encontrado',
  })
  @ApiResponse({
    status: 404,
    description: 'Engenheiro não encontrado',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.engineerService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um engenheiro' })
  @ApiParam({ name: 'id', description: 'UUID do engenheiro' })
  @ApiBody({ type: UpdateEngineerDto })
  @ApiResponse({
    status: 200,
    type: EngineerResponseDto,
    description: 'Engenheiro atualizado',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEngineerDto: UpdateEngineerDto,
  ) {
    return this.engineerService.update(id, updateEngineerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um engenheiro' })
  @ApiParam({ name: 'id', description: 'UUID do engenheiro' })
  @ApiResponse({
    status: 204,
    description: 'Engenheiro removido',
  })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.engineerService.remove(id);
  }
}
