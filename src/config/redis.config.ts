import { RedisOptions } from 'ioredis';

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const redisConfig: RedisOptions = {
  host: requireEnv('REDIS_HOST'),
  port: parseInt(requireEnv('REDIS_PORT'), 10),
  password: process.env.REDIS_PASSWORD,
};
