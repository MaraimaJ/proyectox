import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddAdminInfoCommand } from './add-amin-info.command';

@CommandHandler(AddAdminInfoCommand)
export class AddAdminInfoHandler
  implements ICommandHandler<AddAdminInfoCommand>
{
  constructor() {}

  async execute(command: AddAdminInfoCommand) {
    return {
      name: command.name,
      lastName: command.lastName,
    };
  }
}
