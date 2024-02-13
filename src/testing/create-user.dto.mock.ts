import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create-user.dto';

export const createUserDTO: CreateUserDTO = {
  birthAt: '2000-01-01',
  email: 'mariantonio@gmail.com',
  name: 'Maria António',
  password: '1232456',
  role: Role.User,
};
