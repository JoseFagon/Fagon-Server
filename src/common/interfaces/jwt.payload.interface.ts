import { CameraType, UserRole } from '@prisma/client';

export interface JwtPayload {
  sub: string;
  email: string;
  role: UserRole;
  cameraType: CameraType | null;
  isActive: boolean;
}
