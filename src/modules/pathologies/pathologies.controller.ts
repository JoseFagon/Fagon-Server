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
import { PathologyResponseDto } from './dto/response-pathology.dto';
import { CreatePathologyDto } from './dto/create-pathology.dto';
import { SearchPathologyDto } from './dto/search-pathology.dto';
import { UpdatePathologyDto } from './dto/update-pathology.dto';
import {
  // CurrentUser,
  RequireAuth,
} from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import { PathologyService } from './pathologies.service';
// import { JwtPayload } from 'src/common/interfaces/jwt.payload.interface';

@ApiTags('Pathologies')
@ApiBearerAuth()
@RequireAuth()
@Roles(ROLES.ADMIN, ROLES.FUNCIONARIO, ROLES.VISTORIADOR)
@Controller('pathologies')
export class PathologyController {
  constructor(private readonly pathologyService: PathologyService) {}

  @Post()
  @ApiOperation({ summary: 'Registra uma nova patologia' })
  @ApiResponse({
    status: 201,
    type: PathologyResponseDto,
    description: 'Patologia registrada com sucesso',
  })
  create(
    @Body() createPathologyDto: CreatePathologyDto,
    // @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.pathologyService.create(createPathologyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as patologias' })
  @ApiResponse({
    status: 200,
    type: [PathologyResponseDto],
    description: 'Lista de patologias',
  })
  @ApiQuery({
    name: 'projectId',
    required: false,
    description: 'Filtrar por ID do projeto',
  })
  findAll(@Query('projectId') projectId?: string) {
    return this.pathologyService.findAll(projectId);
  }

  @Get('search')
  @ApiOperation({ summary: 'Busca patologias com filtros' })
  @ApiResponse({
    status: 200,
    type: [PathologyResponseDto],
    description: 'Resultados da busca',
  })
  search(@Query() searchParams: SearchPathologyDto) {
    return this.pathologyService.search(searchParams);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtém detalhes de uma patologia' })
  @ApiResponse({
    status: 200,
    type: PathologyResponseDto,
    description: 'Detalhes da patologia',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.pathologyService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma patologia' })
  @ApiResponse({
    status: 200,
    type: PathologyResponseDto,
    description: 'Patologia atualizada',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePathologyDto: UpdatePathologyDto,
    // @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.pathologyService.update(
      id,
      updatePathologyDto,
      // currentUser.sub,
    );
  }

  @Delete(':id')
  @Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
  @ApiOperation({ summary: 'Remove uma patologia' })
  @ApiResponse({
    status: 204,
    description: 'Patologia removida',
  })
  remove(
    @Param('id', ParseUUIDPipe) id: string,
    // @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.pathologyService.remove(id);
  }
}
