import { ICommand } from '@nestjs/cqrs';

export class SumCommand implements ICommand {
  constructor(
    public readonly num1: number,
    public readonly num2: number,
  ) {}
}
