import { IntersectionType, OmitType } from '@nestjs/swagger';
import { StudentDTO } from 'src/student/student.dto';
import { UserDTO } from 'src/user/user.dto';

export class RegisterStudentDTO extends IntersectionType(
  StudentDTO,
  OmitType(UserDTO, ['type'] as const),
) {}
