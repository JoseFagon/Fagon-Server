import {
  Controller,
  Get,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
  ForbiddenException,
  Body,
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
import { Roles } from 'src/common/decorators/roles.decorator';
import { ROLES } from 'src/common/constants/roles.constant';
import { UserResponseDto } from './dto/response-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './users.service';
import {
  CurrentUser,
  RequireAuth,
} from 'src/common/decorators/current-user.decorator';
import { JwtPayload } from 'src/common/interfaces/jwt.payload.interface';
import { SearchUserDto } from './dto/search-user.dto';

@ApiTags('Users Management')
@ApiBearerAuth()
@RequireAuth()
@Roles(ROLES.ADMIN)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Roles(ROLES.ADMIN)
  @CacheKey('users_list')
  @CacheTTL(30) // 30 segundos de cache
  @ApiOperation({ summary: 'List all users (Admin)' })
  @ApiResponse({
    status: 200,
    type: [UserResponseDto],
    description: 'Lista de usuários',
  })
  @ApiQuery({ name: 'status', required: false, type: String })
  findAll(@Query('status') status?: string) {
    return this.userService.findAll({ status });
  }

  @Get('search')
  @ApiOperation({ summary: 'Search users with filters (Admin)' })
  @ApiResponse({
    status: 200,
    type: [UserResponseDto],
    description: 'Resultados da busca',
  })
  search(@Query() searchParams: SearchUserDto) {
    return this.userService.search(searchParams);
  }

  // --- USER PROFILE ---
  @Get(':id')
  @ApiOperation({ summary: 'Get user profile' })
  @Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
  @ApiParam({ name: 'id', description: 'User UUID' })
  @ApiResponse({
    status: 200,
    type: UserResponseDto,
    description: 'Perfil do usuário',
  })
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    if (currentUser.role !== ROLES.ADMIN && currentUser.sub !== id) {
      throw new ForbiddenException('Acesso não autorizado');
    }
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user profile' })
  @ApiParam({ name: 'id', description: 'User UUID' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({
    status: 200,
    type: UserResponseDto,
    description: 'Perfil atualizado',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    if (currentUser.sub !== id && currentUser.role !== ROLES.ADMIN) {
      throw new ForbiddenException('Acesso não autorizado');
    }

    if (updateUserDto.role && currentUser.role !== ROLES.ADMIN) {
      throw new ForbiddenException(
        'Apenas administradores podem alterar roles',
      );
    }

    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user (Admin)' })
  @ApiParam({ name: 'id', description: 'User UUID' })
  @ApiResponse({
    status: 204,
    description: 'Usuário removido',
  })
  remove(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    if (currentUser.sub === id) {
      throw new ForbiddenException('Você não pode se auto-excluir');
    }
    return this.userService.remove(id);
  }
}
