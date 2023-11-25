import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteResult } from 'typeorm';
import { UserT } from 'src/libs/types/types';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAll(): Promise<UserT[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<UserT> {
    return this.userService.findById(+id);
  }

  @Post()
  create(@Body() body: CreateUserDto): Promise<UserT> {
    return this.userService.create(body);
  }

  @Put()
  update(@Body() body: UpdateUserDto): Promise<UserT> {
    return this.userService.update(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.userService.delete(+id);
  }
}
