import { NodeOptions } from '@sentry/node';

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const sentryConfig: NodeOptions = {
  dsn: requireEnv('SENTRY_DSN'),
  environment: requireEnv('NODE_ENV'),
  tracesSampleRate: 1.0,
};
