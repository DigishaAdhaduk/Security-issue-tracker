import { IssueService } from "../../../core/guard";
import { Guard } from "../../../core/issue";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = new Guard().run(req);

    const issue = await new IssueService().create(body, user.id);

    return new Response(JSON.stringify(issue), { status: 200 });
  } catch (e: any) {
    return new Response(
      JSON.stringify({ error: e.message }),
      { status: 400 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const user = new Guard().run(req);
    const issues = await new IssueService().list(user.id);

    return new Response(JSON.stringify(issues), { status: 200 });
  } catch {
    return new Response(
      JSON.stringify({ error: "Unauthorized" }),
      { status: 401 }
    );
  }
}
