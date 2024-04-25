import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';

import { SumCommandHandler } from '../application/sum-user-info/sum-user-info-handler';
import { RestCommandHandler } from '../application/rest-user-info/rest-user-info-handler';

import { UsersRepository } from './repository/users.repository';
import { Users, UsersSchema } from './schemas/users.schema';
import { UsersController } from './users.controller';
import { CreateUserCommandHandler } from '../application/users-create/user-create-info.handler';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    SumCommandHandler,
    RestCommandHandler,
    UsersRepository,
    CreateUserCommandHandler,
  ],
})
export class UsersModule {}
