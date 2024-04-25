import { Controller, Post, Body, Get } from '@nestjs/common';
import { SumCommand } from './appusers/sum-user-info/sum-info-commands';
import { RestCommand } from './appusers/rest-user-info/rest-user-info-command';
import { CommandBus } from '@nestjs/cqrs';
import { UsersCreate } from './userscreate/task-userscreate-info.command';

@Controller('users')
export class UsersController {
  constructor(private readonly commandBus: CommandBus) {}

  @Get()
  async sum(@Body() body) {
    return this.commandBus.execute(new SumCommand(body.num1, body.num2));
  }

  @Post()
  async rest(@Body() body) {
    return this.commandBus.execute(new RestCommand(body.num1, body.num2));
  }
  @Post()
  async UsersCreate(@Body() body) {
    return this.commandBus.execute(
      new UsersCreate(body.firtsName, body.lastName, body.email, body.password),
    );
  }
}
