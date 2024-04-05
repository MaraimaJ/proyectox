import { Controller, Get, Req, Post } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  sumUser(@Req() request: Request): string {
    return 'Hola, mundo.';
  }
  @Post()
  resUser(@Req() request: Request): string {
    return 'Adiós, mundo.';
  }
}
