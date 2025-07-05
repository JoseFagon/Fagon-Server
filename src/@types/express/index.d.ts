import { UserRole, CameraType } from '@prisma/client';

type UserFromRequest = {
  sub: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  cameraType: CameraType | null;
};

declare global {
  namespace Express {
    interface Request {
      user?: UserFromRequest;
    }
  }
}
