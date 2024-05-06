import { ICommandHandler } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/users/infrastructure/repository/users.repository';
import { UpdateUserCommand } from './update-user.command';

@Injectable()
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(private readonly userRepository: UsersRepository) {}

  async execute(command: UpdateUserCommand) {
    const user = await this.userRepository.findOne(command.id);
    if (!user) {
      throw new Error('User not found');
    }
    user.firstName = command.firstName;
    user.lastName = command.lastName;
    user.email = command.email;
    user.password = command.password;
    return this.userRepository.updateUser(command.id, user);
  }
}
