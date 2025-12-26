import { Repo } from "../../../../core/repo";
import { Auth } from "../../../../core/auth";
import { cors } from "../../../../core/cors";

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: cors() });
}

export async function POST(req: Request) {
  try {
    const b = await req.json();
    const r = new Repo();

    if (!b.email || !b.pass) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        { status: 400, headers: cors() }
      );
    }

    const ex = await r.user().findUnique({
      where: { email: b.email },
    });

    // 🔹 USER EXISTS → LOGIN FLOW
    if (ex) {
      const ok = await Auth.check(b.pass, ex.pass);
      if (!ok) {
        return new Response(
          JSON.stringify({ error: "Wrong password" }),
          { status: 401, headers: cors() }
        );
      }

      return new Response(
        JSON.stringify({ token: Auth.make(ex.id) }),
        { status: 200, headers: cors() }
      );
    }

    // 🔹 NEW USER → REGISTER FLOW
    const token = await Auth.register(b.email, b.pass);

    return new Response(
      JSON.stringify({ token }),
      { status: 201, headers: cors() }
    );
  } catch (e: any) {
    console.error("REGISTER ERROR:", e);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500, headers: cors() }
    );
  }
}
