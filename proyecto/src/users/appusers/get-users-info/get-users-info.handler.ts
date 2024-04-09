import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetUsersInfoCommands } from './get-users-info.command';

@CommandHandler(GetUsersInfoCommands)
export class GetUserInfoHandler
  implements ICommandHandler<GetUsersInfoCommands>
{
  constructor() {}

  async execute(command: GetUsersInfoCommands) {
    console.log({ command });
    return {
      name: 'José',
      lastName: 'Maraima',
    };
  }
}
