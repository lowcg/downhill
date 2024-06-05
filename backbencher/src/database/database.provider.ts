import * as path from 'path';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/config';
import { DataSource } from 'typeorm';

export const DATABASE_PROVIDER = 'DATABASE_PROVIDER';
export const DatabaseProvider = {
  provide: DATABASE_PROVIDER,
  useFactory: async (configService: ConfigService) => {
    const dbConfig = configService.get<DatabaseConfig>('db');
    const dataSource = new DataSource({
      type: 'postgres',
      url: dbConfig.url,
      synchronize: true,
      entities: [path.join(__dirname, '/../**/*.entity{.ts,.js}')],
    });
    return await dataSource.initialize();
  },
  inject: [ConfigService],
};
