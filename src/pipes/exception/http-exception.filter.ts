import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

import { Request, Response } from 'express';
import { writeFile } from 'fs/promises';
import { join } from 'path';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const requestObject = ctx.getRequest<Request>();
    const responseObject = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const message = exception.message;

    const body = {
      statusCode: status,
      message,
      timeStamp: new Date().toISOString(),
      path: requestObject.url,
    };
    this.writeHttpLog(body);
    responseObject.status(status).json(body);
  }

  private async writeHttpLog(data: Record<string, any>) {
    const LOGS_DIR = join(__dirname, `${Date.now()}-log.json`);

    try {
      await writeFile(LOGS_DIR, JSON.stringify(data));
    } catch (error) {
      return;
    }
  }
}
