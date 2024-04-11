import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersController } from './users.controller';
import { SumCommandHandler } from './appusers/sum-user-info/sum-user-info-handler';
import { RestCommandHandler } from './appusers/rest-user-info/rest-user-info-handler';
@Module({
  imports: [CqrsModule],
  controllers: [UsersController],
  providers: [SumCommandHandler, RestCommandHandler],
})
export class UsersModule {}
