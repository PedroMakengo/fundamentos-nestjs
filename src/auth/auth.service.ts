import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async createToken() {
    // Criar token
  }

  async checkToken(token: string) {
    // Checar token
    console.log(token);
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Email e/ou senha incorretos.');
    }

    return user;
  }
  async forget(email: string) {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Email incorreto');
    }

    // TO DO Enviar o e-mail...

    return true;
  }

  async reset(password: string, token: string) {
    // TO DO Se o token for válido

    const id = 0;

    await this.prisma.user.update({
      where: { id },
      data: { password },
    });

    return true;
  }
}
