import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as argon2 from 'argon2';
import { LoginDto } from './dto/login.dto';
import { AccessKeyDto } from './dto/access-key.dto';
import * as crypto from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../common/interfaces/jwt.payload.interface';
import { LoginResponse } from '../common/interfaces/response.login.interface';
import { User } from '@prisma/client';
import { UserResponseDto } from '../modules/users/dto/response-user.dto';
import { ROLES } from '../common/constants/roles.constant';
import { UserService } from 'src/modules/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateEmployee(
    email: string,
    password: string,
  ): Promise<User | null> {
    const user = await this.userService.findOneByEmail(email);

    if (!user?.password || !(await argon2.verify(user.password, password))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    return user;
  }

  async validateVisitor(loginDto: LoginDto): Promise<User | null> {
    const { accessKeyToken } = loginDto;

    const accessKey = await this.prisma.accessKey.findFirst({
      where: { token: accessKeyToken },
    });

    if (!accessKey || new Date(accessKey.expiresAt) < new Date()) {
      return null;
    }

    const user = await this.prisma.user.findUnique({
      where: { id: accessKey.userId },
    });

    return user;
  }

  async getMe(userId: string): Promise<UserResponseDto> {
    try {
      const user = await this.userService.findOne(userId);

      if (!user) {
        throw new UnauthorizedException('Usuário não encontrado');
      }

      return user;
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('Token inválido ou expirado');
    }
  }

  async loginEmployee(loginDto: LoginDto): Promise<LoginResponse> {
    const { email, password } = loginDto;

    if (!email || !password) {
      throw new UnauthorizedException('Email e senha são obrigatórios');
    }

    const user = await this.userService.findOneByEmail(email);

    if (!user) throw new UnauthorizedException('Usuário não encontrado');
    if (!user.status) {
      throw new UnauthorizedException('Usuário desativado');
    }
    if (!user.password || !(await argon2.verify(user.password, password))) {
      throw new UnauthorizedException('Senha incorreta');
    }

    return this.generateToken(user);
  }

  async loginWithAccessKey(loginDto: LoginDto): Promise<LoginResponse> {
    const { accessKeyToken } = loginDto;

    const accessKey = await this.prisma.accessKey.findFirst({
      where: { token: accessKeyToken },
      include: {
        user: true,
        project: true,
      },
    });

    if (!accessKey) {
      throw new UnauthorizedException({
        error: 'Chave de acesso não encontrada',
        userType: 'vistoriador',
      });
    }

    if (new Date(accessKey.expiresAt) < new Date()) {
      throw new UnauthorizedException({
        error: 'Chave de acesso expirada',
        userType: 'vistoriador',
      });
    }

    if (accessKey.user.role !== ROLES.VISTORIADOR) {
      throw new UnauthorizedException({
        error: 'Acesso permitido apenas para vistoriadores',
        userType: 'not_vistoriador',
      });
    }

    if (accessKey.user.cameraType !== accessKey.cameraType) {
      throw new UnauthorizedException({
        error: 'Tipo de câmera não corresponde ao vistoriador',
        userType: 'vistoriador',
        cameraMismatch: true,
      });
    }

    const tokenResponse = this.generateToken(accessKey.user);

    return {
      ...tokenResponse,
      projectId: accessKey.projectId,
      user: {
        ...tokenResponse.user,
        cameraType: accessKey.user.cameraType,
      },
    };
  }

  async generateAccessKey(accessKeyDto: AccessKeyDto, userId: string) {
    const requestingUser = await this.userService.findOne(userId);

    if (!requestingUser || requestingUser.role === ROLES.VISTORIADOR) {
      throw new BadRequestException(
        'Apenas funcionários ou administradores podem gerar chaves de acesso',
      );
    }

    const surveyor = await this.prisma.user.findFirst({
      where: {
        role: ROLES.VISTORIADOR,
        cameraType: accessKeyDto.cameraType,
      },
    });

    if (!surveyor) {
      throw new BadRequestException(
        `Nenhum vistoriador com o tipo de câmera ${accessKeyDto.cameraType} encontrado`,
      );
    }

    const accessKey = await this.prisma.accessKey.create({
      data: {
        token: crypto.randomBytes(32).toString('hex'),
        projectId: accessKeyDto.projectId,
        userId: surveyor.id,
        generatedBy: userId,
        cameraType: accessKeyDto.cameraType,
        expiresAt: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10d
      },
    });

    return {
      token: accessKey.token,
      expiresAt: accessKey.expiresAt,
      cameraType: accessKey.cameraType,
      surveyorId: surveyor.id,
      surveyorName: surveyor.name,
    };
  }

  async revokeAccessKey(
    accessKeyToken: string,
    userId: string,
  ): Promise<{ message: string }> {
    const requestingUser = await this.userService.findOne(userId);

    if (!requestingUser || requestingUser.role === ROLES.VISTORIADOR) {
      throw new BadRequestException(
        'Apenas funcionários ou administradores podem expirar chaves de acesso',
      );
    }

    const accessKey = await this.prisma.accessKey.findFirst({
      where: { token: accessKeyToken },
    });

    if (!accessKey) {
      throw new BadRequestException('Chave de acesso não encontrada');
    }

    await this.prisma.accessKey.update({
      where: { id: accessKey.id },
      data: { expiresAt: new Date() },
    });

    return { message: 'Chave de acesso expirada com sucesso' };
  }

  private generateToken(user: User) {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      cameraType:
        user.role === ROLES.VISTORIADOR && user.cameraType != null
          ? user.cameraType
          : null,
      isActive: user.status,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
        status: user.status,
        cameraType:
          user.role === ROLES.VISTORIADOR && user.cameraType != null
            ? user.cameraType
            : null,
      },
    };
  }
}
