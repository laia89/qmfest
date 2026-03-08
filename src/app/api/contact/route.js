import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@queermusicfest.com'
const fromEmail = `QM Fest <${contactEmail}>`

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        {
          ok: true,
          sent: false,
          message: 'Contact form received (email not configured)',
        },
        { status: 200 },
      )
    }

    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      replyTo: email.trim(),
      subject: `[QM Fest] Contact from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: error.message || 'Failed to send email' },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: true, sent: true, id: data?.id })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: err.message || 'Invalid request' },
      { status: 500 },
    )
  }
}
