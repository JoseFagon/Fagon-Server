import { CameraType, UserRole } from 'src/generated/@prisma/client';

export interface JwtPayload {
  sub: string;
  email?: string;
  role: UserRole;
  cameraType?: CameraType;
  isActive: boolean;
}
