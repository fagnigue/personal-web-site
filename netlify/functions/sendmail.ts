import type { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";
import nodemailer from 'nodemailer';

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const data = JSON.parse(event.body as string);

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    const mailStatus = await transporter.sendMail({
        from: `Message Site Personnel ${process.env.MAIL_FROM_ADDRESS}`,
        to: `admin ${process.env.MAIL_TO_ADDRESS}`,
        subject: 'PERSONAL SITE CONTACT',
        html: data.message,
    })
    .catch((error) => console.log(error))
    .then(() => true);

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: mailStatus
      })
    };
};

export { handler };