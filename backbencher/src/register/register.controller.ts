import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterStudentDTO } from './register.dto';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post('/student')
  public async registerStudent(@Body() body: RegisterStudentDTO) {
    await this.registerService.registerStudent(body);
    return { ok: true };
  }
}
