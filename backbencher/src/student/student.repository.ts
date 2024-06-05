import { DataSource } from 'typeorm';
import { Student } from './student.entity';
import { DATABASE_PROVIDER } from 'src/database/database.provider';

export const STUDENT_REPO = 'STUDENT_REPO';
export const StudentRepository = {
  provide: STUDENT_REPO,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Student),
  inject: [DATABASE_PROVIDER],
};
