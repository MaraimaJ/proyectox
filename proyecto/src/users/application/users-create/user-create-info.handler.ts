import { CommandHandler } from '@nestjs/cqrs';
import { UsersCreateCommand } from './user-create-info.command';
import { UsersRepository } from '../../infrastructure/repository/users.repository';

@CommandHandler(UsersCreateCommand)
export class CreateUserCommandHandler {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(command: UsersCreateCommand): Promise<void> {
    await this.usersRepository.createUser(
      command.firstName,
      command.lastName,
      command.email,
      command.password,
    );
  }
}
