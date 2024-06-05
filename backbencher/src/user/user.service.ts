import { Inject, Injectable } from '@nestjs/common';
import { USER_REPO } from './user.repository';
import { Repository } from 'typeorm';
import { User, UserType } from './user.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPO)
    private userRepo: Repository<User>,
  ) {}

  public async createStudentUser(
    dto: Omit<Partial<UserDTO>, 'type'>,
  ): Promise<User> {
    return await this.createUser({ type: UserType.USER, ...dto });
  }

  public async createUser(dto: Partial<UserDTO>): Promise<User> {
    const user = new User();
    user.email = dto.email;
    user.password = dto.password;
    user.type = dto.type;
    return await this.userRepo.save(user);
  }

  public async getUserByEmail(email: string): Promise<User> {
    return await this.userRepo.findOneBy({ email });
  }

  public async isUserWithRollExists(email: string): Promise<boolean> {
    return (await this.userRepo.countBy({ email })) == 1;
  }

  public async getUserById(id: string): Promise<User> {
    return await this.userRepo.findOneBy({ id });
  }
}
