import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: string;

  @Column({
    length: 63,
  })
  name: string;

  @Column({
    length: 127,
  })
  email: string;

  @Column({
    length: 127,
  })
  password: string;

  @Column({ type: 'date', nullable: true })
  birthAt: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @Column({ enum: [1, 2] })
  role: number;
}
