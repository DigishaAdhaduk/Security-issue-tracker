import { IssueService } from "../../../../core/issue";
import { Guard } from "../../../../core/guard";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await new Guard().check(req);
    const issue = await new IssueService().one(params.id, user.id);

    if (!issue) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(JSON.stringify(issue), { status: 200 });
  } catch {
    return new Response("Unauthorized", { status: 401 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await new Guard().check(req);
    const body = await req.json();

    await new IssueService().update(params.id, body, user.id);

    return new Response("Updated", { status: 200 });
  } catch {
    return new Response("Unauthorized", { status: 401 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await new Guard().check(req);

    await new IssueService().remove(params.id, user.id);

    return new Response("Deleted", { status: 200 });
  } catch {
    return new Response("Unauthorized", { status: 401 });
  }
}
