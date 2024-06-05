import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  userId: string;

  @OneToOne("User")
  @JoinColumn()
  user: User;

  @Column("varchar", { length: 256 })
  name: string;

  @Column("numeric", { precision: 1, scale: 0 })
  semester: number;

  @Column("varchar", { length: 64 })
  roll: string;

  @Column("varchar", { length: 256 })
  collegeMail: string;

  @Column("varchar", { length: 32 })
  phone: string;
}