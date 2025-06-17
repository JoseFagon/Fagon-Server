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
  @ApiOperation({ summary: 'Create a new state law' })
  @ApiResponse({
    status: 201,
    type: StateLawResponseDto,
    description: 'State law successfully created',
  })
  create(@Body() createStateLawDto: CreateStateLawDto) {
    return this.stateLawService.create(createStateLawDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all state laws' })
  @ApiResponse({
    status: 200,
    type: [StateLawResponseDto],
    description: 'List of state laws',
  })
  @ApiQuery({
    name: 'state',
    required: false,
    description: 'Filter by state',
  })
  @ApiQuery({
    name: 'active',
    required: false,
    description: 'Filter by active/inactive status',
    type: Boolean,
  })
  findAll(@Query('state') state?: string, @Query('active') active?: boolean) {
    return this.stateLawService.findAll({ state, active });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get details of a specific state law' })
  @ApiResponse({
    status: 200,
    type: StateLawResponseDto,
    description: 'State law details',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stateLawService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a state law' })
  @ApiResponse({
    status: 200,
    type: StateLawResponseDto,
    description: 'State law updated',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateStateLawDto: UpdateStateLawDto,
  ) {
    return this.stateLawService.update(id, updateStateLawDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a state law' })
  @ApiResponse({
    status: 204,
    description: 'State law successfully deleted',
  })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.stateLawService.remove(id);
  }
}
