import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AdminRepository } from './admin.provider';

@Module({
  imports: [DatabaseModule],
  providers: [AdminRepository],
})
export class AdminModule {}
