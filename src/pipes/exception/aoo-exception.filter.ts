import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { writeFile } from 'fs/promises';
import { join } from 'path';

@Catch()
export class AppExceptionFilter implements ExceptionFilter {
  constructor(private httpAdapter: HttpAdapterHost) {}
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
    }
    const { httpAdapter } = this.httpAdapter;

    const responsePayload = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      message,
    };

    this.writeHttpLog(responsePayload);

    httpAdapter.reply(ctx.getResponse(), responsePayload, status);
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
