import { DataSource } from 'typeorm';
import { Admin } from './admin.entity';
import { DATABASE_PROVIDER } from 'src/database/database.provider';

export const ADMIN_REPO = 'USER_REPO';
export const AdminRepository = {
  provide: ADMIN_REPO,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Admin),
  inject: [DATABASE_PROVIDER],
};
