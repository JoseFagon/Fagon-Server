import { Controller, Get, Query, ParseUUIDPipe, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { RequireAuth } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import { LogResponseDto } from './dto/response-log.dto';
import { SearchLogDto } from './dto/search-log.dto';
import { LogService } from './logs.service';

@ApiTags('Logs')
@ApiBearerAuth()
@RequireAuth()
@Roles(ROLES.ADMIN)
@Controller('logs')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos os logs' })
  @ApiResponse({
    status: 200,
    type: [LogResponseDto],
    description: 'Lista de logs',
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
    return this.logService.findAll({ page, limit });
  }

  @Get('search')
  @ApiOperation({ summary: 'Busca logs com filtros' })
  @ApiResponse({
    status: 200,
    type: [LogResponseDto],
    description: 'Resultados da busca',
  })
  search(@Query() searchParams: SearchLogDto) {
    return this.logService.search(searchParams);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Obtém logs por usuário' })
  @ApiResponse({
    status: 200,
    type: [LogResponseDto],
    description: 'Logs do usuário',
  })
  findByUser(@Param('userId', ParseUUIDPipe) userId: string) {
    return this.logService.findByUser(userId);
  }
}
