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
import { LocationFinishingInputDto } from './dto/location-finishing-input.dto';

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
  @ApiOperation({ summary: 'Create a new material finishing' })
  @ApiResponse({
    status: 201,
    type: MaterialFinishingResponseDto,
    description: 'Material finishing successfully created',
  })
  create(@Body() createDto: CreateMaterialFinishingDto) {
    return this.materialFinishingService.create(createDto);
  }

  @Post('bulk/:locationId')
  @ApiOperation({
    summary: 'Create multiple material finishings for a location',
  })
  @ApiResponse({
    status: 201,
    type: [MaterialFinishingResponseDto],
    description: 'Material finishings successfully created',
  })
  async createBulk(
    @Param('locationId', ParseUUIDPipe) locationId: string,
    @Body() finishes: LocationFinishingInputDto,
  ) {
    return this.materialFinishingService.createBulk(locationId, finishes);
  }

  @Get('location/:locationId')
  @ApiOperation({ summary: 'List material finishings by location' })
  @ApiResponse({
    status: 200,
    type: [MaterialFinishingResponseDto],
    description: 'List of material finishings',
  })
  findByLocation(@Param('locationId', ParseUUIDPipe) locationId: string) {
    return this.materialFinishingService.findByLocation(locationId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific material finishing' })
  @ApiResponse({
    status: 200,
    type: MaterialFinishingResponseDto,
    description: 'Material finishing details',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.materialFinishingService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a material finishing' })
  @ApiResponse({
    status: 200,
    type: MaterialFinishingResponseDto,
    description: 'Material finishing updated',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDto: UpdateMaterialFinishingDto,
  ) {
    return this.materialFinishingService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a material finishing' })
  @ApiResponse({
    status: 204,
    description: 'Material finishing successfully deleted',
  })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.materialFinishingService.remove(id);
  }
}
