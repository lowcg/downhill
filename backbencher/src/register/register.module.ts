import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { UserModule } from 'src/user/user.module';
import { StudentModule } from 'src/student/student.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [UserModule, StudentModule, AuthModule],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
