import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';

@Module({
  controllers: [StudentController],
  exports: [StudentModule],
})
export class StudentModule {}
