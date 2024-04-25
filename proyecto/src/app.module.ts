import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/infrastructure/users.module';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    AdminModule,
    MongooseModule.forRoot('mongodb://localhost:27017/proyectox'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
