import { CameraType, UserRole } from 'src/generated/client';

export interface JwtPayload {
  sub: string;
  email?: string;
  role: UserRole;
  cameraType?: CameraType;
}
