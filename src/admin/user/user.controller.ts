import { Controller, Get } from '@nestjs/common';

@Controller('/profile')
export class UserController {
  @Get()
  getUserProfilr() {
    return 'user';
  }
}
