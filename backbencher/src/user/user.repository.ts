import { DataSource } from 'typeorm';
import { User } from './user.entity';
import { DATABASE_PROVIDER } from 'src/database/database.provider';

export const USER_REPO = 'USER_REPO';
export const UserRepository = {
  provide: USER_REPO,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
  inject: [DATABASE_PROVIDER],
};
