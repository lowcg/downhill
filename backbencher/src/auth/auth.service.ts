import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  public async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  public async comparePassword(
    hashed: string,
    password: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashed);
  }

  public async authenticateUser(
    email: string,
    password: string,
  ): Promise<User> {
    const user = await this.userService.getUserByEmail(email);
    if (!(await this.comparePassword(user.password, password))) {
      throw new UnauthorizedException();
    }
    return user;
  }

  public async generateJwt(user: User): Promise<string> {
    return await this.jwtService.signAsync({ sub: user.id, iss: 'in:edu:aot' });
  }
}
