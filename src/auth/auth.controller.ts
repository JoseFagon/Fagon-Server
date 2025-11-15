import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AccessKeyDto } from './dto/access-key.dto';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { JwtPayload } from '../common/interfaces/jwt.payload.interface';
import { Public } from '../common/decorators/public.decorator';
import { JwtAuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('access-keys')
  async generateAccessKey(
    @Body() accessKeyDto: AccessKeyDto,
    @CurrentUser() currentUser: JwtPayload,
  ): Promise<{ token: string }> {
    return this.authService.generateAccessKey(accessKeyDto, currentUser.sub);
  }

  @Post('access-keys/revoke')
  async revokeAccessKey(
    @Body() { accessKeyToken }: { accessKeyToken: string },
    @CurrentUser() currentUser: JwtPayload,
  ): Promise<{ message: string }> {
    return this.authService.revokeAccessKey(accessKeyToken, currentUser.sub);
  }

  @Get('me')
  async getMe(@CurrentUser() currentUser: JwtPayload) {
    return this.authService.getMe(currentUser.sub);
  }

  @Post('login')
  @Public()
  async login(@Body() loginDto: LoginDto) {
    if (loginDto.accessKeyToken) {
      return this.authService.loginWithAccessKey(loginDto);
    }
    return this.authService.loginEmployee(loginDto);
  }
}
