import nodemailer from 'nodemailer';

//get email and password from .env file
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export async function POST(request) {
  const { name, userEmail, phone } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: pass,
    },
  });

  const mailOptions = {
    from: 'liveonefifty@gmail.com',
    to: 'liveonefifty@gmail.com',
    subject: `Query from ${name}`,
    html: `
      <h1>New query from ${name} </h1>
      <p>Email: ${userEmail}</p>
      <p>Phone: ${phone}</p>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error sending email', { status: 500 });
  }
}
