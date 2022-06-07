import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "103e23f336c668",
      pass: "d0cdaeab824a12"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe DW2A4 <dw2a4@projeto.com',
            to: 'Hugo R. Alves <r.hugoalves66@getMaxListeners.com>',
            subject,
            html: body, 
        });
    }
}