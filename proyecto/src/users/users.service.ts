import { Injectable } from '@nestjs/common';
@Injectable()
export class UsersService {
  async createUser(
    firtsName: string,
    lastName: string,
    email: string,
    password: string,
  ): Promise<void> {}
}
