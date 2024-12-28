import { env } from '@/env'
import nodemailer from 'nodemailer'
// import { Resend } from 'resend'

// export const resend = new Resend(env.RESEND_API_KEY)
export const mail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: env.MAIL_USER,
    pass: env.MAIL_PASS,
  },
})
