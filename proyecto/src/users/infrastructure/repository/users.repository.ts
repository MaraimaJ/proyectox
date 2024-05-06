import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from '../schemas/users.schema';
import { Model } from 'mongoose';

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
  async updateUser(id: number, user: Users): Promise<Users> {
    await this.usersModel.updateOne({ _id: id }, user);
    return this.usersModel.findOne({ _id: id });
  }

  async deleteUser(id: number): Promise<void> {
    await this.usersModel.deleteOne({ _id: id });
  }

  async findOne(id: number): Promise<Users> {
    return this.usersModel.findOne({ _id: id });
  }
}
