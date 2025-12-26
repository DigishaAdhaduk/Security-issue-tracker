import { Auth } from "./auth"
import { Err } from "./err"

export class Guard {
  run(req: Request) {
    throw new Error("Method not implemented.")
  }
  check(req: Request) {
    const h = req.headers.get("authorization")
    if (!h) throw new Err("login first", 401)
    return Auth.verify(h.split(" ")[1])
  }
}
