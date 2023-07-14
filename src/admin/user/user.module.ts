import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  exports: [UserModule],
})
export class UserModule {}
