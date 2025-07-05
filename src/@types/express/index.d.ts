import { UserRole } from '@prisma/client';

type UserFromRequest = {
  id: string;
  email: string;
  role: UserRole;
  isActive: boolean;
};

declare global {
  namespace Express {
    interface Request {
      user?: UserFromRequest;
    }
  }
}
