import { CommandHandler } from '@nestjs/cqrs';
import { UsersCreate } from './task-userscreate-info.command';
import { UsersService } from '../users.service';
@CommandHandler(UsersCreate)
export class CreateUserCommandHandler {
  constructor(private readonly userService: UsersService) {}

  async execute(command: UsersCreate): Promise<void> {
    await this.userService.createUser(
      command.firtsName,
      command.lastName,
      command.email,
      command.password,
    );
  }
}
