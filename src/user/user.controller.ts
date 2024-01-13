import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body) {
    return { body };
  }

  @Get()
  async read() {
    return { users: [] };
  }

  @Get(':id')
  async readOne(@Param() param) {
    return { user: {}, param };
  }

  @Put(':id')
  async update(@Param() param, @Body() body) {
    return { method: 'put', user: body, param };
  }

  @Patch(':id')
  async updatePartial(@Param() param, @Body() body) {
    return { method: 'patch', user: body, param };
  }

  @Delete(':id')
  async delete(@Param() param) {
    return { user: {}, param };
  }
}
