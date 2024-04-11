import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetAdminInfoCommand } from './get-admin-info.command';

@CommandHandler(GetAdminInfoCommand)
export class GetAdminInfoHandler
  implements ICommandHandler<GetAdminInfoCommand>
{
  constructor() {}

  async execute(command: GetAdminInfoCommand) {
    console.log({ command });
    return {
      name: 'David',
      lastName: 'Acosta',
    };
  }
}
