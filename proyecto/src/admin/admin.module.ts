import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { AdminController } from './admin.controller';
import { GetAdminInfoHandler } from './application/get-admin-info/get-admin-info.handler';
import { AddAdminInfoHandler } from './application/add-admin-info/add-amin-info.handler';

@Module({
  imports: [CqrsModule],
  controllers: [AdminController],
  providers: [GetAdminInfoHandler, AddAdminInfoHandler],
})
export class AdminModule {}
