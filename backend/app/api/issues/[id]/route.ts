import { IssueService } from "../../../../core/issue";
import { Guard } from "../../../../core/guard";
import type { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const user = await new Guard().check(req);
    const issue = await new IssueService().one(id, user.id);

    if (!issue) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(JSON.stringify(issue), { status: 200 });
  } catch {
    return new Response("Unauthorized", { status: 401 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const user = await new Guard().check(req);
    const body = await req.json();

    await new IssueService().update(id, body, user.id);

    return new Response("Updated", { status: 200 });
  } catch {
    return new Response("Unauthorized", { status: 401 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const user = await new Guard().check(req);

    await new IssueService().remove(id, user.id);

    return new Response("Deleted", { status: 200 });
  } catch {
    return new Response("Unauthorized", { status: 401 });
  }
}
