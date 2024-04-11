import { Controller, Get, Post, Body } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { GetAdminInfoCommand } from './application/get-admin-info/get-admin-info.command';
import { AddAdminInfoCommand } from './application/add-admin-info/add-amin-info.command';

@Controller('admin')
export class AdminController {
  constructor(private commandBus: CommandBus) {}
  @Get()
  getAdminInfo() {
    return this.commandBus.execute(new GetAdminInfoCommand());
  }

  @Post()
  addAdminInfo(@Body() body) {
    return this.commandBus.execute(
      new AddAdminInfoCommand(body.name, body.lastName),
    );
  }
}
