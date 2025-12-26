import { Repo } from "../../../core/repo";
import { Guard } from "../../../core/guard";

export async function GET(req: Request) {
  const uid = new Guard().check(req);

  const repo = new Repo();
  const issues = await repo.issue().findMany({
    where: { uid },
  });

  return Response.json(issues);
}

export async function POST(req: Request) {
  const uid = new Guard().check(req);
  const body = await req.json();

  const repo = new Repo();
  const issue = await repo.issue().create({
    data: {
      title: body.title,
      type: body.type,
      desc: body.desc || "",
      uid,
    },
  });

  return Response.json(issue, { status: 201 });
}
