import { MailerOptions } from '@nestjs-modules/mailer';

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const mailerConfig: MailerOptions = {
  transport: {
    host: requireEnv('MAIL_HOST'),
    port: parseInt(requireEnv('MAIL_PORT')),
    secure: false,
    auth: {
      user: requireEnv('MAIL_USER'),
      pass: requireEnv('MAIL_PASS'),
    },
  },
  defaults: { from: `"No Reply" <${requireEnv('MAIL_FROM')}>` },
};
