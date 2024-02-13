import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';

import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  // Create user
  async create(data: CreateUserDTO) {
    if (
      await this.usersRepository.exist({
        where: { email: data.email },
      })
    ) {
      throw new BadRequestException('Este e-mail já está sendo usado');
    }
    const salt = await bcrypt.genSalt();

    data.password = await bcrypt.hash(data.password, salt);

    const user = this.usersRepository.create(data);

    return this.usersRepository.save(user);
  }

  //Read user
  async list() {
    return this.usersRepository.find();
  }

  // Read One User
  async show(id: number) {
    await this.exists(id);
    return this.usersRepository.findOneBy({ id });
  }

  // Update
  async update(
    { email, name, password, birthAt, role }: UpdatePutUserDTO,
    id: number,
  ) {
    await this.exists(id);

    const salt = await bcrypt.genSalt();

    const passwordHash = await bcrypt.hash(password, salt);

    await this.usersRepository.update(id, {
      email,
      name,
      password: passwordHash,
      birthAt: birthAt ? new Date(birthAt) : null,
      role,
    });

    return this.show(id);
  }

  // Update Partial
  async updatePartial(
    { email, name, password, birthAt, role }: UpdatePatchUserDTO,
    id: number,
  ) {
    const data: any = {};

    if (birthAt) {
      data.birthAt = new Date(birthAt);
    }
    if (email) {
      data.email = email;
    }
    if (name) {
      data.name = name;
    }
    if (password) {
      const salt = await bcrypt.genSalt();
      data.password = await bcrypt.hash(password, salt);
    }
    if (role) {
      data.role = role;
    }
    await this.usersRepository.update(Number(id), data);

    return this.show(id);
  }

  // Delete User
  async delete(id: number) {
    await this.exists(id);

    await this.usersRepository.delete(id);

    return true;
  }

  async exists(id: number) {
    if (!(await this.usersRepository.exist({ where: { id } }))) {
      throw new NotFoundException(`O usuário ${id} não existe.`);
    }
  }
}
