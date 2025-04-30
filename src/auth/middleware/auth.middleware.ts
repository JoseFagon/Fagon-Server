import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from 'src/common/interfaces/jwt.payload.interface';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    if (this.isPublicRoute(req)) return next();

    const token = this.extractToken(req);
    if (!token) throw new UnauthorizedException('Token não fornecido');

    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(token, {
        secret: this.configService.get<string>('JWT_SECRET'),
      });

      req.user = {
        userId: payload.sub,
        role: payload.role,
        cameraType: payload.cameraType,
      };

      next();
    } catch {
      throw new UnauthorizedException('Token inválido ou expirado');
    }
  }

  private isPublicRoute(req: Request): boolean {
    const publicRoutes = ['/auth/login', '/health'];
    return publicRoutes.includes(req.path);
  }

  private extractToken(req: Request): string | null {
    const [type, token] = req.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : null;
  }
}
