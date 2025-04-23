import { JwtModuleOptions } from '@nestjs/jwt';

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const jwtConfig: JwtModuleOptions = {
  secret: requireEnv('JWT_SECRET'),
  signOptions: { expiresIn: '1d' },
};
