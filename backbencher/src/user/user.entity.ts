import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserType {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('enum', { enum: UserType })
  type: string;

  @Column('varchar', { length: 256 })
  email: string;

  @Column('varchar', { length: 128 })
  password: string;
}
