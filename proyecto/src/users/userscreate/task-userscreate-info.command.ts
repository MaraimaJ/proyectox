export class UsersCreate {
  constructor(
    public readonly firtsName: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly password: string,
  ) {}
}
