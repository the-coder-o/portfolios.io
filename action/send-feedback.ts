'use server'

import nodemailer from 'nodemailer'

export async function sendFeedback(formData: FormData) {
  const email = formData.get('email') as string
  const feedback = formData.get('feedback') as string
  const mood = formData.get('mood') as string

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: email,
    to: 'abdullaevvabdulbasit@gmail.com',
    subject: 'New Feedback Submission',
    text: `
      Email: ${email}
      Feedback: ${feedback}
      Mood: ${mood}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Feedback sent successfully!' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'Failed to send feedback. Please try again.' }
  }
}
