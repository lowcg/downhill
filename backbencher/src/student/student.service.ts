import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { StudentDTO } from './student.dto';
import { STUDENT_REPO } from './student.repository';

@Injectable()
export class StudentService {
  constructor(
    @Inject(STUDENT_REPO)
    private studentRepo: Repository<Student>,
  ) {}

  public async createStudent(
    dto: Partial<StudentDTO>,
    userId: string,
  ): Promise<Student> {
    const student = new Student();
    student.userId = userId;
    student.name = dto.name;
    student.phone = dto.phone;
    student.roll = dto.roll;
    student.semester = dto.semester;
    student.collegeMail = dto.collegeMail;
    return await this.studentRepo.save(student);
  }

  public async isStudentWithRollExist(roll: string): Promise<boolean> {
    return (await this.studentRepo.countBy({ roll })) == 1;
  }
}
