import { Prisma, User } from "generated/prisma";

export interface UsersRepository {
  findByEmail(email: string): unknown;
  create: (data: Prisma.UserCreateInput) => Promise<User>;
}
