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
} from '@nestjs/swagger';
import { RequireAuth } from '../../common/decorators/current-user.decorator';
import { CreateStateLawDto } from './dto/create-state-law.dto';
import { StateLawResponseDto } from './dto/response-state-law.dto';
import { UpdateStateLawDto } from './dto/update-state-law.dto';
import { StateLawService } from './state-laws.service';
import { ROLES } from 'src/common/constants/roles.constant';
import { Roles } from 'src/common/decorators/roles.decorator';

@ApiTags('State Laws')
@ApiBearerAuth()
@RequireAuth()
@Roles(ROLES.ADMIN)
@Controller('state-laws')
export class StateLawController {
  constructor(private readonly stateLawService: StateLawService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova legislação estadual' })
  @ApiResponse({
    status: 201,
    type: StateLawResponseDto,
    description: 'Legislação criada com sucesso',
  })
  create(@Body() createStateLawDto: CreateStateLawDto) {
    return this.stateLawService.create(createStateLawDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as legislações estaduais' })
  @ApiResponse({
    status: 200,
    type: [StateLawResponseDto],
    description: 'Lista de legislações',
  })
  @ApiQuery({
    name: 'state',
    required: false,
    description: 'Filtrar por estado',
  })
  @ApiQuery({
    name: 'active',
    required: false,
    description: 'Filtrar por status ativo/inativo',
    type: Boolean,
  })
  findAll(@Query('state') state?: string, @Query('active') active?: boolean) {
    return this.stateLawService.findAll({ state, active });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtém uma legislação específica' })
  @ApiResponse({
    status: 200,
    type: StateLawResponseDto,
    description: 'Detalhes da legislação',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stateLawService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma legislação estadual' })
  @ApiResponse({
    status: 200,
    type: StateLawResponseDto,
    description: 'Legislação atualizada',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateStateLawDto: UpdateStateLawDto,
  ) {
    return this.stateLawService.update(id, updateStateLawDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma legislação estadual' })
  @ApiResponse({
    status: 204,
    description: 'Legislação removida',
  })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.stateLawService.remove(id);
  }
}
