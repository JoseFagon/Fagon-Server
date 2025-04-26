import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AccessKeyDto } from './dto/access-key.dto';
import { JwtAuthGuard } from './guards/auth.guard';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { JwtPayload } from 'src/common/interfaces/jwt.payload.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    if (loginDto.accessKeyToken) {
      return this.authService.loginWithAccessKey(loginDto);
    }
    return this.authService.loginEmployee(loginDto);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('access-keys')
  async generateAccessKey(
    @Body() accessKeyDto: AccessKeyDto,
    @CurrentUser() user: JwtPayload,
  ): Promise<{ token: string }> {
    return this.authService.generateAccessKey(accessKeyDto, user.sub);
  }
}
