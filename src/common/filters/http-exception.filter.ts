import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

interface ExceptionResponse {
  message?: string | string[] | ValidationError[] | object;
  error?: string;
}

interface ValidationError {
  property?: string;
  constraints?: Record<string, string>;
  children?: ValidationError[];
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status: HttpStatus;
    let message: string | object;
    let error: string;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse() as ExceptionResponse;

      if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
        if (Array.isArray(exceptionResponse.message)) {
          if (this.isValidationErrorArray(exceptionResponse.message)) {
            message = this.formatValidationErrors(exceptionResponse.message);
          } else {
            message = exceptionResponse.message.join('; ');
          }
        } else {
          message = exceptionResponse.message || exceptionResponse;
        }
        error = exceptionResponse.error || exception.name;
      } else {
        message = exceptionResponse;
        error = exception.name;
      }
    } else if (exception instanceof Error) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Internal server error';
      error = 'Internal Server Error';
      this.logger.error(
        `Unhandled exception: ${exception.message}`,
        exception.stack,
      );
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Unknown error occurred';
      error = 'Internal Server Error';
      this.logger.error('Unknown exception occurred', exception);
    }

    if (typeof message !== 'string') {
      message = JSON.stringify(message);
    }

    if (status !== HttpStatus.NOT_FOUND) {
      this.logger.error(
        `Http Status: ${status} Error: ${error}`,
        `Path: ${request.url}`,
        `Message: ${message}`,
      );
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: message,
      error: error,
    });
  }

  private isValidationErrorArray(
    messages: unknown[],
  ): messages is ValidationError[] {
    return messages.every(
      (msg) =>
        typeof msg === 'object' &&
        msg !== null &&
        ('property' in msg || 'constraints' in msg),
    );
  }

  private formatValidationErrors(errors: ValidationError[]): string {
    return errors
      .map((error) => {
        if (error.constraints) {
          return Object.values(error.constraints).join(', ');
        }
        return error.property || 'Validation error';
      })
      .join('; ');
  }
}
