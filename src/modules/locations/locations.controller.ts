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
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationResponseDto } from './dto/response-location.dto';
import {
  CurrentUser,
  RequireAuth,
} from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import { JwtPayload } from 'src/common/interfaces/jwt.payload.interface';
import { LocationService } from './locations.service';

@ApiTags('Locations')
@ApiBearerAuth()
@RequireAuth()
@Roles(ROLES.ADMIN, ROLES.FUNCIONARIO, ROLES.VISTORIADOR)
@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new location' })
  @ApiResponse({
    status: 201,
    type: LocationResponseDto,
    description: 'Location created successfully',
  })
  @ApiBody({ type: CreateLocationDto })
  create(
    @Body() createLocationDto: CreateLocationDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.locationService.create(createLocationDto, currentUser.sub);
  }

  @Get('project/:projectId')
  @ApiOperation({ summary: 'Get locations by project' })
  @ApiResponse({
    status: 200,
    type: [LocationResponseDto],
    description: 'List of locations for the project',
  })
  findByProject(@Param('projectId', ParseUUIDPipe) projectId: string) {
    return this.locationService.findByProject(projectId);
  }

  @Get('pavement/:pavementId')
  @ApiOperation({ summary: 'Get locations by pavement' })
  @ApiResponse({
    status: 200,
    type: [LocationResponseDto],
    description: 'List of locations for the pavement',
  })
  findByPavement(@Param('pavementId', ParseUUIDPipe) pavementId: string) {
    return this.locationService.findByPavement(pavementId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get location details' })
  @ApiResponse({
    status: 200,
    type: LocationResponseDto,
    description: 'Location details',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.locationService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update location information' })
  @ApiResponse({
    status: 200,
    type: LocationResponseDto,
    description: 'Location updated',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateLocationDto: UpdateLocationDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.locationService.update(id, updateLocationDto, currentUser.sub);
  }

  @Delete(':id')
  @Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
  @ApiOperation({ summary: 'Delete a location' })
  @ApiResponse({
    status: 204,
    description: 'Location deleted',
  })
  remove(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.locationService.remove(id, currentUser.sub);
  }
}
