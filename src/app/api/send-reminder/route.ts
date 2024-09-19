import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const msg = {
      to: email,
      from: 'admin@covercompanion.ai',
      subject: 'So you wanna land your dream job?',
      templateId: 'd-11d42733d2c14a90a6716a8431139189',
      dynamicTemplateData: {
        email: email,
      },
    }
    
    await sgMail.send(msg)
    return NextResponse.json({ message: 'Email sent successfully.' })
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}