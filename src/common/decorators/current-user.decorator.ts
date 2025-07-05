import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { Request } from 'express';
import { UserFromRequest } from 'src/types/express';

export const CurrentUser = createParamDecorator<
  keyof UserFromRequest | undefined
>((field, ctx: ExecutionContext): unknown => {
  const request = ctx.switchToHttp().getRequest<Request>();
  const user = request.user as UserFromRequest | undefined;

  if (!user) {
    throw new Error(
      'CurrentUser decorator used without authentication. Did you add the AuthGuard?',
    );
  }

  return field ? user[field] : user;
});

export const REQUIRE_AUTH_KEY = 'requireAuth';
export const RequireAuth = () => SetMetadata('requireAuth', true);
