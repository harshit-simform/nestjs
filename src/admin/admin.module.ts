import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AdminController } from './admin.controller';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    StudentModule,
    RouterModule.register([
      {
        path: 'admin',
        module: AdminModule,
        children: [
          { path: 'user', module: UserModule },
          { path: 'student', module: StudentModule },
        ],
      },
    ]),
  ],
  controllers: [AdminController],
  exports: [AdminModule],
})
export class AdminModule {}
