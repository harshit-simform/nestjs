import { Controller, Get } from '@nestjs/common';

@Controller('profile')
export class StudentController {
  @Get()
  getStudentProfile() {
    return 'Student';
  }
}
