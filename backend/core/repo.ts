import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export class Repo {
  user() {
    return db.user;
  }

  issue() {
    return db.issue;
  }

  token() {
    return db.token;
  }
}

export { db };
