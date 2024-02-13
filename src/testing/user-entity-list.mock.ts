import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    name: 'Maria António',
    email: 'mariantonio@gmail.com',
    birthAt: new Date('2000-01-01'),
    id: 1,
    password: '$2b$10$3L4UdqsT9.q1puKVub5hPOzxKpbdaHsR/LHo9SqM2HYGFfzMxueXy',
    role: Role.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Antónia Vicente',
    email: 'antoniavicente@gmail.com',
    birthAt: new Date('2000-01-01'),
    id: 2,
    password: '$2b$10$3L4UdqsT9.q1puKVub5hPOzxKpbdaHsR/LHo9SqM2HYGFfzMxueXy',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Vitoria Vicente',
    email: 'vitoria@gmail.com',
    birthAt: new Date('2000-01-01'),
    id: 3,
    password: '$2b$10$3L4UdqsT9.q1puKVub5hPOzxKpbdaHsR/LHo9SqM2HYGFfzMxueXy',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
