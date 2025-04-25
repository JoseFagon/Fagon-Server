import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AccessKeyDto } from './dto/access-key.dto';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/auth.guard';

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
    @Req() req: Request,
  ): Promise<{ token: string }> {
    const user = req.user as { sub: string };
    const userId: string = user.sub;
    return this.authService.generateAccessKey(accessKeyDto, userId);
  }
}
