import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Repo } from "./repo";
console.log("JWT_SECRET =", process.env.JWT_SECRET);

export class Auth {
  static async register(email: string, pass: string) {
    const repo = new Repo();
    const hash = await bcrypt.hash(pass, 10);

    const user = await repo.user().create({
      data: { email, pass: hash },
    });

    return this.make(user.id);
  }

  static make(id: string) {
    return jwt.sign({ id }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });
  }

  static async check(pass: string, hash: string) {
    return bcrypt.compare(pass, hash);
  }
}
