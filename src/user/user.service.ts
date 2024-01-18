import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // Create user
  async create({ email, name, password, birthAt, role }: CreateUserDTO) {
    return this.prisma.user.create({
      data: {
        email,
        name,
        password,
        birthAt: birthAt ? new Date(birthAt) : null,
        role,
      },
    });
  }

  //Read user
  async list() {
    return this.prisma.user.findMany();
  }

  // Read One User
  async show(id: number) {
    await this.exists(id);
    return this.prisma.user.findUnique({ where: { id } });
  }

  // Update
  async update(
    { email, name, password, birthAt, role }: UpdatePutUserDTO,
    id: number,
  ) {
    await this.exists(id);

    return this.prisma.user.update({
      data: {
        email,
        name,
        password,
        birthAt: birthAt ? new Date(birthAt) : null,
        role,
      },
      where: { id },
    });
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
      data.password = password;
    }
    if (role) {
      data.role = role;
    }

    return this.prisma.user.update({
      data,
      where: { id },
    });
  }

  // Delete User
  async delete(id: number) {
    await this.exists(id);
    return this.prisma.user.delete({ where: { id } });
  }

  async exists(id: number) {
    if (!(await this.prisma.user.count({ where: { id } }))) {
      throw new NotFoundException(`O usuário ${id} não existe.`);
    }
  }
}
