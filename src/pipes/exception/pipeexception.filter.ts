import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
export class PipeError extends Error {
  constructor(message?: string) {
    super(message || 'invalid Id');
  }
}
@Catch(PipeError)
export class PipeExceptionFilter implements ExceptionFilter {
  catch(exception: PipeError, host: ArgumentsHost) {
    const errorBody = {
      message: exception.message,
      error: 'The Id cannot be less than 0',
    };
    const ctx = host.switchToHttp();
    const responseObject = ctx.getResponse<Response>();
    responseObject.status(HttpStatus.BAD_REQUEST).json(errorBody);
  }
}
