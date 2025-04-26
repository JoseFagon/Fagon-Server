import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export class EnvConfig {
  @IsEnum(Environment)
  NODE_ENV: Environment = Environment.Development;

  @IsNumber()
  @Transform(({ value }: { value: string }) => parseInt(value, 10))
  PORT = 3000;

  @IsString()
  DATABASE_URL!: string;

  @IsString()
  JWT_SECRET!: string;

  @IsString()
  @IsOptional()
  JWT_EXPIRES_IN = '1d';

  @IsString()
  REDIS_HOST!: string;

  @IsNumber()
  @Transform(({ value }: { value: string }) => parseInt(value, 10))
  REDIS_PORT = 6379;

  @IsString()
  @IsOptional()
  REDIS_PASSWORD?: string;

  @IsString()
  @IsOptional()
  REDIS_USER?: string;

  @IsString()
  MAIL_HOST!: string;

  @IsNumber()
  @Transform(({ value }: { value: string }) => parseInt(value, 10))
  MAIL_PORT!: number;

  @IsString()
  MAIL_USER!: string;

  @IsString()
  MAIL_PASS!: string;

  @IsString()
  SUPABASE_URL!: string;

  @IsString()
  SUPABASE_KEY!: string;

  @IsString()
  @IsOptional()
  SENTRY_DSN?: string;

  @IsString()
  @IsOptional()
  LOG_LEVEL = 'info';

  @IsNumber()
  @Transform(({ value }: { value: string }) => parseInt(value, 10))
  @IsOptional()
  THROTTLE_TTL = 60;

  @IsNumber()
  @Transform(({ value }: { value: string }) => parseInt(value, 10))
  @IsOptional()
  THROTTLE_LIMIT = 100;
}
