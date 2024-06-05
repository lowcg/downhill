import { ConflictException, Injectable } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { UserService } from 'src/user/user.service';
import { RegisterStudentDTO } from './register.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class RegisterService {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private studentService: StudentService,
  ) {}

  public async registerStudent(dto: RegisterStudentDTO) {
    if (
      (await this.studentService.isStudentWithRollExist(dto.roll)) ||
      (await this.userService.isUserWithRollExists(dto.roll))
    ) {
      throw new ConflictException();
    }
    dto.password = await this.authService.hashPassword(dto.password);
    const user = await this.userService.createStudentUser(dto);
    const student = await this.studentService.createStudent(dto, user.id);
    return student;
  }
}
