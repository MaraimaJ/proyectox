import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { UsersController } from './users.controller';
import { GetUserInfoHandler } from './appusers/get-users-info/get-users-info.handler';
import { AddUsersInfoHandler } from './appusers/add-users-info/add-users-info.handler';

@Module({
  imports: [CqrsModule],
  controllers: [UsersController],
  providers: [GetUserInfoHandler, AddUsersInfoHandler],
})
export class UsersModule {}
