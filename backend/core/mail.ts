export class Mail {
  async send(to: string, sub: string, html: string) {
    console.log("MAIL DISABLED", { to, sub })
    return true
  }
}
