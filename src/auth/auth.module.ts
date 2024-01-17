import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [
    JwtModule.register({ secret: `v;d@J)R~AcD4*6Pea:mu%2'}EjzM]"Y!` }),
    UserModule,
    PrismaModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [],
})
export class AuthModule {}
