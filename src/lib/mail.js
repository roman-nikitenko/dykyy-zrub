import nodemailer from 'nodemailer';

export async function sendMail({ body = '' }) {
  const { SMTP_EMAIL, SMTP_PASSWORD, EMAIL_HOST, EMAIL_PORT } = process.env;

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
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      /* TODO: replace on dynamic values */
      to: 'dykyy-zrub@ukr.net',
      subject: 'EMAIL FROM SITE',
      html: body,
    });
    console.log('@Sended email>>>', sendResult);
  } catch (error) {
    console.log('@@@Error on send', error);
  }
}
