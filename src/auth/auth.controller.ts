import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AccessKeyDto } from './dto/access-key.dto';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { JwtPayload } from 'src/common/interfaces/jwt.payload.interface';
import { Public } from 'src/common/decorators/public.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { ROLES } from 'src/common/constants/roles.constant';
// import { ForgotPasswordDto } from './dto/forgot-password.dto';
// import { ResetPasswordDto } from './dto/reset-password.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  async login(@Body() loginDto: LoginDto) {
    if (loginDto.accessKeyToken) {
      return this.authService.loginWithAccessKey(loginDto);
    }
    return this.authService.loginEmployee(loginDto);
  }

  @Post('register')
  @Public()
  async register(@Body() registerDto: RegisterDto) {
    console.log('Payload recebido:', JSON.stringify(registerDto, null, 2));
    console.log('Tipo do nome:', typeof registerDto.name);
    console.log('Tipo do email:', typeof registerDto.email);
    console.log('Tipo da senha:', typeof registerDto.password);
    return this.authService.register(registerDto);
  }

  @Post('access-keys')
  @Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
  async generateAccessKey(
    @Body() accessKeyDto: AccessKeyDto,
    @CurrentUser() currentUser: JwtPayload,
  ): Promise<{ token: string }> {
    return this.authService.generateAccessKey(accessKeyDto, currentUser.sub);
  }

  // @Post('forgot-password')
  // async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
  //   return this.authService.requestPasswordReset(forgotPasswordDto.email);
  // }

  // @Post('reset-password')
  // async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
  //   return this.authService.resetPassword(
  //     resetPasswordDto.token,
  //     resetPasswordDto.newPassword,
  //   );
  // }
}
