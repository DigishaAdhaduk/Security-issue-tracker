import { Guard } from "../../../../core/guard"
import { Repo } from "../../../../core/repo"

export async function GET(req: Request) {
  const g: any = new Guard().check(req)
  const r = new Repo()
  return Response.json(await r.user().findUnique({ where: { id: g.id } }))
}
