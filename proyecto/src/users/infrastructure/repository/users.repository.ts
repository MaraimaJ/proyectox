import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from '../schemas/users.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dtos/create-users.dto';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(Users.name) private usersModel: Model<Users>) {}

  async createUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ): Promise<Users> {
    const createdUser = await new this.usersModel({
      firstName,
      lastName,
      email,
      password,
    });

    return createdUser.save();
  }
}
