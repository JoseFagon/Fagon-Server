import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { MaterialFinishingResponseDto } from './dto/response-material-finishing.dto';
import { CreateMaterialFinishingDto } from './dto/create-material-finishing.dto';
import { UpdateMaterialFinishingDto } from './dto/update-material-finishing.dto';
import { RequireAuth } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import { MaterialFinishingService } from './material-finishings.service';

@ApiTags('Material Finishings')
@ApiBearerAuth()
@RequireAuth()
@Roles(ROLES.ADMIN, ROLES.FUNCIONARIO, ROLES.VISTORIADOR)
@Controller('material-finishings')
export class MaterialFinishingController {
  constructor(
    private readonly materialFinishingService: MaterialFinishingService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo acabamento material' })
  @ApiResponse({
    status: 201,
    type: MaterialFinishingResponseDto,
    description: 'Acabamento material criado com sucesso',
  })
  create(@Body() createDto: CreateMaterialFinishingDto) {
    return this.materialFinishingService.create(createDto);
  }

  @Get('location/:locationId')
  @ApiOperation({ summary: 'Lista acabamentos materiais por localização' })
  @ApiResponse({
    status: 200,
    type: [MaterialFinishingResponseDto],
    description: 'Lista de acabamentos materiais',
  })
  findByLocation(@Param('locationId', ParseUUIDPipe) locationId: string) {
    return this.materialFinishingService.findByLocation(locationId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtém um acabamento material específico' })
  @ApiResponse({
    status: 200,
    type: MaterialFinishingResponseDto,
    description: 'Detalhes do acabamento material',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.materialFinishingService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um acabamento material' })
  @ApiResponse({
    status: 200,
    type: MaterialFinishingResponseDto,
    description: 'Acabamento material atualizado',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDto: UpdateMaterialFinishingDto,
  ) {
    return this.materialFinishingService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um acabamento material' })
  @ApiResponse({
    status: 204,
    description: 'Acabamento material removido',
  })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.materialFinishingService.remove(id);
  }
}
