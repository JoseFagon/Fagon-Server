import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as argon2 from 'argon2';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AccessKeyDto } from './dto/access-key.dto';
import * as crypto from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/common/interfaces/jwt.payload.interface';
import { AccessKey, User } from 'src/generated/client';
import { ROLES } from 'src/common/constants/roles.constant';
import { RegisterResponse } from 'src/common/interfaces/response.register.interface';
import { LoginResponse } from 'src/common/interfaces/response.login.interface';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateEmployee(
    email: string,
    password: string,
  ): Promise<User | null> {
    const user = (await this.prisma.user.findUnique({
      where: { email },
    })) as User | null;

    if (!user?.password || !(await argon2.verify(user.password, password))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    return user;
  }

  async validateVisitor(loginDto: LoginDto): Promise<User | null> {
    const { accessKeyToken } = loginDto;

    const accessKey = (await this.prisma.accessKey.findFirst({
      where: { token: accessKeyToken },
    })) as AccessKey | null;

    if (!accessKey || new Date(accessKey.expiresAt) < new Date()) {
      return null;
    }

    const user = (await this.prisma.user.findFirst({
      where: { role: 'vistoriador', cameraType: accessKey.cameraType },
    })) as User | null;

    return user;
  }

  async loginEmployee(loginDto: LoginDto): Promise<LoginResponse> {
    const { email, password } = loginDto;

    if (!email || !password) {
      throw new UnauthorizedException('Email e senha são obrigatórios');
    }

    const user = (await this.prisma.user.findUnique({
      where: { email, role: 'funcionario' },
    })) as User | null;

    if (!user) throw new UnauthorizedException('Credenciais inválidas');
    if (!user.password || !(await argon2.verify(user.password, password))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    return this.generateToken(user);
  }

  async loginWithAccessKey(loginDto: LoginDto): Promise<LoginResponse> {
    const { accessKeyToken } = loginDto;
    const accessKey = (await this.prisma.accessKey.findFirst({
      where: { token: accessKeyToken },
    })) as AccessKey | null;

    if (!accessKey || new Date(accessKey.expiresAt) < new Date()) {
      throw new UnauthorizedException('Chave de acesso inválida ou expirada');
    }

    const user = (await this.prisma.user.findFirst({
      where: {
        role: 'vistoriador',
        cameraType: accessKey.cameraType,
      },
    })) as User | null;
    if (!user) {
      throw new UnauthorizedException('Nenhum usuário vistoriador configurado');
    }

    return this.generateToken(user);
  }

  async register(registerDto: RegisterDto): Promise<RegisterResponse> {
    if (
      (!registerDto.email && registerDto.role !== 'vistoriador') ||
      !registerDto.password
    ) {
      throw new Error('Email e senha são obrigatórios');
    }

    const user = await this.prisma.user.create({
      data: {
        ...registerDto,
        password: await argon2.hash(registerDto.password),
        status: true,
      },
    });

    const payload: JwtPayload = {
      id: user.id,
      sub: user.id,
      email: user.email || undefined,
      role: user.role,
      cameraType: user.cameraType || undefined,
      isActive: user.status,
    };

    return {
      token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        sub: user.id,
        email: user.email,
        role: user.role,
        cameraType: user.cameraType || undefined,
        isActive: user.status,
      },
    };
  }

  async generateAccessKey(accessKeyDto: AccessKeyDto, userId: string) {
    const accessKey = (await this.prisma.accessKey.create({
      data: {
        token: crypto.randomBytes(32).toString('hex'),
        projectId: accessKeyDto.projectId,
        cameraType: accessKeyDto.cameraType,
        userId: userId,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24h
      },
    })) as AccessKey;
    return { token: accessKey.token };
  }

  private generateToken(user: User) {
    const payload: JwtPayload = {
      id: user.id,
      sub: user.id,
      email:
        user.role === ROLES.FUNCIONARIO || user.role === ROLES.ADMIN
          ? user.email
          : undefined,
      role: user.role,
      cameraType:
        user.role === ROLES.VISTORIADOR && user.cameraType != null
          ? user.cameraType
          : undefined,
      isActive: user.status,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
        cameraType:
          user.role === ROLES.VISTORIADOR && user.cameraType != null
            ? user.cameraType
            : undefined,
      },
    };
  }
}
