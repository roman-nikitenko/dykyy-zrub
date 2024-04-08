import nodemailer from 'nodemailer';
import { generateEmailContent } from '@/app/template/template';

export async function sendMail(data) {
  const { SMTP_EMAIL, SMTP_PASSWORD, EMAIL_HOST, EMAIL_PORT, EMAIL_TO } = process.env;

  const transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: parseInt(EMAIL_PORT),
    secure: true,
    auth: { user: SMTP_EMAIL, pass: SMTP_PASSWORD },
  });

  try {
    await transport.verify();
  } catch (e) {
    console.log('@Error on verify', e);
    return;
  }

  try {
    await transport.sendMail({
      from: SMTP_EMAIL,
      /* TODO: replace on dynamic values */
      to: EMAIL_TO,
      subject: `Повідомлення від ${data?.name}`,
      ...generateEmailContent(data),
    });
  } catch (error) {
    console.log('@@@Error on send', error);
  }
}
