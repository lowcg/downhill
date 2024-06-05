import { Controller, Get } from '@nestjs/common';
import { JwtAuth, UseUser } from 'src/auth/auth.decorator';
import { StudentDTO } from './student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('/')
  @JwtAuth()
  public async getStudent(@UseUser("id") userId: string): Promise<StudentDTO> {
    const student = await this.studentService.getStudentProfileFromUserId(userId);
    return new StudentDTO(student);
  }
}
