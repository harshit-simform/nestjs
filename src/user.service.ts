import { Injectable, Scope } from '@nestjs/common';
import { createUSerDto } from './dto';
@Injectable()
export class UserService {
  private readonly users: createUSerDto[] = [];
  constructor() {
    console.log('userService');
  }

  create(data: createUSerDto) {
    this.users.push(data);
  }

  findAllUser() {
    return this.users;
  }
}
