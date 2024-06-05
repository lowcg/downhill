import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { StudentRepository } from './student.repository';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentController],
  providers: [StudentRepository, StudentService],
  exports: [StudentService],
})
export class StudentModule {}
