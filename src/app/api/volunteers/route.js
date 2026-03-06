import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const toEmail = process.env.CONTACT_TO_EMAIL || 'hola@qmfest.com'
const fromEmail = process.env.RESEND_FROM || 'QM Fest <onboarding@resend.dev>'

export async function POST(request) {
  try {
    const { name, email, interest, message } = await request.json()
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        {
          ok: true,
          sent: false,
          message: 'Volunteer form received (email not configured)',
        },
        { status: 200 },
      )
    }

    const resend = new Resend(apiKey)
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      interest?.trim() ? `Area of interest: ${interest.trim()}` : null,
      message?.trim() ? `\nMessage:\n${message.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email.trim(),
      subject: `[QM Fest] Volunteer sign-up: ${name.trim()}`,
      text: body,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: error.message || 'Failed to send' },
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
