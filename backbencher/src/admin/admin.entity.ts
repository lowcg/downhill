import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 256 })
  name: string;

  @Column('varchar', { length: 20 })
  contact: string;
}
