import { Injectable, Scope, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import { EnvConfig, Environment } from 'src/config/env-config.class';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService {
  private logger!: winston.Logger;
  private context?: string;

  constructor(
    @Inject(ConfigService)
    private configService: ConfigService<EnvConfig, true>,
  ) {
    this.initializeLogger();
  }

  private createNestFormat(): winston.Logform.Format {
    return nestWinstonModuleUtilities.format.nestLike('MyApp', {
      colors: true,
      prettyPrint: true,
    });
  }

  private initializeLogger() {
    const logLevel = this.configService.get('LOG_LEVEL', { infer: true });
    const nodeEnv = this.configService.get('NODE_ENV', { infer: true });

    const transports: winston.transport[] = [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.ms(),
          this.createNestFormat(),
        ),
      }) as winston.transport,
    ];

    if (nodeEnv !== Environment.Development) {
      transports.push(
        new DailyRotateFile({
          filename: 'logs/application-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
        }) as unknown as winston.transport,
      );
    }

    this.logger = winston.createLogger({
      level: logLevel,
      transports,
    });
  }

  setContext(context: string) {
    this.context = context;
  }

  log(message: string, meta?: any) {
    this.logger.info(message, { context: this.context, ...meta });
  }

  error(message: string, trace?: string, meta?: any) {
    this.logger.error(message, {
      context: this.context,
      stack: trace,
      ...meta,
    });
  }

  warn(message: string, meta?: any) {
    this.logger.warn(message, { context: this.context, ...meta });
  }

  debug(message: string, meta?: any) {
    this.logger.debug(message, { context: this.context, ...meta });
  }

  verbose(message: string, meta?: any) {
    this.logger.verbose(message, { context: this.context, ...meta });
  }
}
