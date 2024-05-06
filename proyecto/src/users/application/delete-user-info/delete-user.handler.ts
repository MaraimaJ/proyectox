import { ICommandHandler } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/users/infrastructure/repository/users.repository';
import { DeleteUserCommand } from './delete-user.command';

@Injectable()
export class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
  constructor(private readonly userRepository: UsersRepository) {}

  async execute(command: DeleteUserCommand) {
    return this.userRepository.deleteUser(command.id);
  }
}
