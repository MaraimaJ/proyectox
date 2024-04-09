import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddUsersInfoCommand } from './add-users-info.command';

@CommandHandler(AddUsersInfoCommand)
export class AddUsersInfoHandler
  implements ICommandHandler<AddUsersInfoCommand>
{
  constructor() {}

  async execute(command: AddUsersInfoCommand) {
    return command.name, command.lastName;
  }
}
