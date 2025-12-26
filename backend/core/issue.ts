import { db } from "./repo";

export class IssueService {
  create(data: any, uid: string) {
    if (!data.title || !data.type || !data.desc) {
      throw new Error("Missing fields");
    }

    return db.issue.create({
      data: {
        title: data.title,
        type: data.type,
        desc: data.desc,
        uid,
      },
    });
  }

  list(uid: string) {
    return db.issue.findMany({
      where: { uid },
      orderBy: { id: "desc" },
    });
  }

  one(id: string, uid: string) {
    return db.issue.findFirst({
      where: { id, uid },
    });
  }

  update(id: string, data: any, uid: string) {
    return db.issue.updateMany({
      where: { id, uid },
      data,
    });
  }

  remove(id: string, uid: string) {
    return db.issue.deleteMany({
      where: { id, uid },
    });
  }
}
