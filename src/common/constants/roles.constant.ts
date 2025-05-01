import { UserRole } from 'src/generated/@prisma/client';

export const ROLE_PERMISSIONS: Record<UserRole, string[]> = {
  [UserRole.admin]: ['users:manage', 'content:manage', 'settings:manage'],
  [UserRole.funcionario]: ['content:manage', 'users:view'],
  [UserRole.vistoriador]: ['profile:manage'],
} as const;

export const ROLES = {
  ADMIN: UserRole.admin,
  FUNCIONARIO: UserRole.funcionario,
  VISTORIADOR: UserRole.vistoriador,
} as const;
