import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Controller('users')
export class UsersController {
  constructor(private commandBus: CommandBus) {}
  @Get('sum/:num1/:num2')
  SumUser(@Param('num1') num1: number, @Param('num2') num2: number): number {
    return num1 + num2;
  }

  @Get('difference/:num1/:num2')
  RestUser(@Param('num1') num1: number, @Param('num2') num2: number): number {
    return num1 - num2;
  }

  @Post('sum')
  AddSumaUser(@Body() body: { num1: number; num2: number }): number {
    return body.num1 + body.num2;
  }

  @Post('difference')
  AddRestaUser(@Body() body: { num1: number; num2: number }): number {
    return body.num1 - body.num2;
  }
}
