import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
