import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // Create user
  async create({ email, name, password }: CreateUserDTO) {
    return this.prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
  }
  //Read user
  async list() {
    return this.prisma.user.findMany();
  }

  // Read One User
  async show(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  // Update
  async update(
    { email, name, password, birthAt }: UpdatePutUserDTO,
    id: number,
  ) {
    return this.prisma.user.update({
      data: {
        email,
        name,
        password,
        birthAt: birthAt ? new Date(birthAt) : null,
      },
      where: { id },
    });
  }

  // Update Partial
  async updatePartial(
    { email, name, password, birthAt }: UpdatePatchUserDTO,
    id: number,
  ) {
    const data: any = {};
    if (birthAt) data.birthAt = new Date(data.birthAt);
    if (email) data.email = email;
    if (name) data.name = name;
    if (password) data.password = password;

    return this.prisma.user.update({
      data,
      where: { id },
    });
  }

  async delete(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
