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
  ApiBody,
} from '@nestjs/swagger';
import { CreatePavementDto } from './dto/create-pavement.dto';
import { UpdatePavementDto } from './dto/update-pavement.dto';
import { PavementResponseDto } from './dto/response-pavement.dto';
import { RequireAuth } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import { PavementService } from './pavements.service';

@ApiTags('Pavements')
@ApiBearerAuth()
@RequireAuth()
@Roles(ROLES.ADMIN, ROLES.FUNCIONARIO, ROLES.VISTORIADOR)
@Controller('pavements')
export class PavementController {
  constructor(private readonly pavementService: PavementService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new pavement' })
  @ApiResponse({
    status: 201,
    type: PavementResponseDto,
    description: 'Pavement created successfully',
  })
  @ApiBody({ type: CreatePavementDto })
  create(@Body() createPavementDto: CreatePavementDto) {
    return this.pavementService.create(createPavementDto);
  }

  @Get('project/:projectId')
  @ApiOperation({ summary: 'Get pavements by project' })
  @ApiResponse({
    status: 200,
    type: [PavementResponseDto],
    description: 'List of pavements for the project',
  })
  findByProject(@Param('projectId', ParseUUIDPipe) projectId: string) {
    return this.pavementService.findByProject(projectId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get pavement details' })
  @ApiResponse({
    status: 200,
    type: PavementResponseDto,
    description: 'Pavement details',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.pavementService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update pavement information' })
  @ApiResponse({
    status: 200,
    type: PavementResponseDto,
    description: 'Pavement updated',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePavementDto: UpdatePavementDto,
  ) {
    return this.pavementService.update(id, updatePavementDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a pavement' })
  @ApiResponse({
    status: 204,
    description: 'Pavement deleted',
  })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.pavementService.remove(id);
  }
}
