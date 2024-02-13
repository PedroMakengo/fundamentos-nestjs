import { Role } from '../enums/role.enum';
import { UpdatePutUserDTO } from '../user/dto/update-put-user.dto';

export const updatePutUserDTO: UpdatePutUserDTO = {
  birthAt: '2000-01-01',
  email: 'mariantonio@gmail.com',
  name: 'Maria António',
  password: '1232456',
  role: Role.User,
};
