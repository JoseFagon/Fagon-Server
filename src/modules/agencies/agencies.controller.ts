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
  CurrentUser,
  RequireAuth,
} from 'src/common/decorators/current-user.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { ROLES } from 'src/common/constants/roles.constant';
import { JwtPayload } from 'src/common/interfaces/jwt.payload.interface';

@ApiTags('Agencies')
@ApiBearerAuth()
@RequireAuth()
@Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
@Controller('agencies')
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova agência' })
  @ApiResponse({
    status: 201,
    type: AgencyResponseDto,
    description: 'Agência criada com sucesso',
  })
  @ApiBody({ type: CreateAgencyDto })
  create(
    @Body() createAgencyDto: CreateAgencyDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.agencyService.create(createAgencyDto, currentUser.sub);
  }

  @Get()
  @CacheKey('agencies_all')
  @CacheTTL(30)
  @ApiOperation({ summary: 'Lista todas as agências' })
  @ApiResponse({
    status: 200,
    type: [AgencyResponseDto],
    description: 'Lista de agências',
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
    return this.agencyService.findAll({ page, limit });
  }

  @Get('search')
  @ApiOperation({ summary: 'Busca agências com filtros' })
  @ApiResponse({
    status: 200,
    type: [AgencyResponseDto],
    description: 'Resultados da busca',
  })
  search(@Query() searchParams: SearchAgencyDto) {
    return this.agencyService.search(searchParams);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtém uma agência por ID' })
  @ApiParam({ name: 'id', description: 'UUID da agência' })
  @ApiResponse({
    status: 200,
    type: AgencyResponseDto,
    description: 'Agência encontrada',
  })
  @ApiResponse({
    status: 404,
    description: 'Agência não encontrada',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.agencyService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma agência' })
  @ApiParam({ name: 'id', description: 'UUID da agência' })
  @ApiBody({ type: CreateAgencyDto })
  @ApiResponse({
    status: 200,
    type: AgencyResponseDto,
    description: 'Agência atualizada',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAgencyDto: CreateAgencyDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.agencyService.update(id, updateAgencyDto, currentUser.sub);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma agência' })
  @ApiParam({ name: 'id', description: 'UUID da agência' })
  @ApiResponse({
    status: 204,
    description: 'Agência removida',
  })
  remove(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.agencyService.remove(id, currentUser.sub);
  }
}
