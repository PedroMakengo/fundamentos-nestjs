import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Module({
  imports: [JwtModule.register({ secret: `v;d@J)R~AcD4*6Pea:mu%2'}EjzM]"Y!` })],
  providers: [AuthService],
  controllers: [],
  exports: [],
})
export class AuthModule {}
