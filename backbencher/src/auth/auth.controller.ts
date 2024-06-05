import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuth, UseUser } from './auth.decorator';
import { BasicAuthDTO, BasicAuthResponseDTO } from './auth.dto';
import { User } from 'src/user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/')
  @LocalAuth()
  public async authenticate(
    @Body() body: BasicAuthDTO,
    @UseUser() user: User,
  ): Promise<BasicAuthResponseDTO> {
    const token = await this.authService.generateJwt(user);
    return { ok: true, data: { accessToken: token } };
  }
}
