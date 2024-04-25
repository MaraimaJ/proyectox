import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SumCommand } from './sum-info-commands';
@CommandHandler(SumCommand)
export class SumCommandHandler implements ICommandHandler<SumCommand> {
  constructor() {}

  async execute(command: SumCommand) {
    return command.num1 + command.num2;
  }
}
