import { Repo } from "../../../../core/repo";
import { Auth } from "../../../../core/auth";

export async function POST(req: Request) {
  try {
    const b = await req.json();
    const r = new Repo();

    if (!b.email || !b.pass) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const u = await r.user().findUnique({
      where: { email: b.email },
    });

    if (!u) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    const ok = await Auth.check(b.pass, u.pass);
    if (!ok) {
      return Response.json({ error: "Wrong password" }, { status: 401 });
    }

    return Response.json({ token: Auth.make(u.id) });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
