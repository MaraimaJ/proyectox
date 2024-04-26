import { Controller, Post, Body } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { UsersCreateCommand } from '../application/users-create/user-create-info.command';
import { SumCommand } from '../application/sum-user-info/sum-info-commands';
import { RestCommand } from '../application/rest-user-info/rest-user-info-command';
import { CreateUserDto } from './dtos/create-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('/sum')
  async sum(@Body() body) {
    return this.commandBus.execute(new SumCommand(body.num1, body.num2));
  }

  @Post('/rest')
  async rest(@Body() body) {
    return this.commandBus.execute(new RestCommand(body.num1, body.num2));
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<void> {
    await this.commandBus.execute(
      new UsersCreateCommand(
        createUserDto.firstName,
        createUserDto.lastName,
        createUserDto.email,
        createUserDto.password,
      ),
    );
  }
}
