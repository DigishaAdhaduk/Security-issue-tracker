import { Auth } from "../../../../core/auth";

export async function POST(req: Request) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");

  if (!token) {
    return new Response(
      JSON.stringify({ error: "No token" }),
      { status: 401 }
    );
  }

  const payload = Auth.verify(token) as any;
  const newToken = Auth.make(payload.id);

  return Response.json({ token: newToken });
}
