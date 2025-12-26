import { Resend } from "resend"

export class Mail {
  send(to: string, sub: string, html: string) {
    const r = new Resend(process.env.RESEND!)
    return r.emails.send({ from: "no@apnisec.com", to, subject: sub, html })
  }
}
