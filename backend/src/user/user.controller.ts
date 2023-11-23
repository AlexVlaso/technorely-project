import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.userService.getById(+id);
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @Put()
  update(@Body() body: UpdateUserDto) {
    return this.userService.update(body);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
