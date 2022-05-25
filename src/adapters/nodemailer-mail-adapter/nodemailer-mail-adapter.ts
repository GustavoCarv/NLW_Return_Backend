import { MailAdapter, SendMailAdapter } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e839dd7bb6fc32",
    pass: "84c19965e6ea51",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailAdapter) {
    await transport.sendMail({
      from: ' "Feedback" <opa@feedget.com>',
      to: "Gus <gustavo.carvg@gmail.com>",
      subject,
      html: body,
    });
  }
}
