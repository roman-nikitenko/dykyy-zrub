import { sendMail } from '@/lib/mail';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const data = await req.json();

    await sendMail({
      body: JSON.stringify(data.message),
    });

    return NextResponse.json({ message: 'OK' });
  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json({ message: 'Error' });
  }
}
