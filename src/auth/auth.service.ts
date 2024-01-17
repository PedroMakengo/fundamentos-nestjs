import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken() {
    // Criar token
  }

  async checkToken(token: string) {
    // Checar token
    console.log(token);
  }

  async login() {}
  async register() {}
  async forget() {}
}
