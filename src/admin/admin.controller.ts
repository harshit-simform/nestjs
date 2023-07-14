import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/dashboard')
export class AdminController {
  @Get()
  getDashboard() {
    return 'dashboard';
  }
}
