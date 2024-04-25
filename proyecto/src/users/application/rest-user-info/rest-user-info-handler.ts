import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RestCommand } from './rest-user-info-command';

@CommandHandler(RestCommand)
export class RestCommandHandler implements ICommandHandler<RestCommand> {
  async execute(command: RestCommand) {
    return command.num1 - command.num2;
  }
}
