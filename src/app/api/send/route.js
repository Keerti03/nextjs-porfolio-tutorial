import{ NextResponse } from "next/server";
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { body } = await req.JSON();
  const { email, subject, message } = req;
  try {
    const data = await resend.emails.send({
      from: 'fromEmail',
      to: ['nagulapallikeerthi@gmail.com'],
      subject: subject,
      react: ( 
      <>
      <h1>{subject}</h1>
      <p>Thank you for contacting us!</p>
      <p>new message submitted</p>
      <p>{message}</p>
      </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

