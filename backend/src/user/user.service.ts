import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { hashPassword } from 'src/libs/helpers/hash.helper';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findById(id: number): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new BadRequestException('User with this email already exist');
    }

    return this.userRepository.save({
      ...createUserDto,
      password: await hashPassword(createUserDto.password),
    });
  }

  async update(updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: { id: updateUserDto.id },
    });
    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.userRepository.delete({ id });
  }
}
