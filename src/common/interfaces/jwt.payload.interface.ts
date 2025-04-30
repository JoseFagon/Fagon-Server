import { CameraType, UserRole } from 'src/generated/client';

export interface JwtPayload {
  id: string;
  sub: string;
  email?: string;
  role: UserRole;
  cameraType?: CameraType;
  isActive: boolean;
}
