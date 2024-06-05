import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { RegisterModule } from './register/register.module';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { configLoader } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configLoader] }),
    AuthModule,
    DatabaseModule,
    RegisterModule,
    UserModule,
    StudentModule,
    AdminModule,
  ],
})
export class AppModule {}
