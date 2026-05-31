import type { NextApiRequest, NextApiResponse } from "next"
import { z } from "zod"
import nodemailer from "nodemailer"

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  projectType: z.string().min(1),
  budget: z.string().min(1),
  description: z.string().min(20),
  email: z.string().email(),
  website: z.string().optional(), // honeypot
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const body = req.body

    // Honeypot check
    if (body.website) {
      return res.status(200).json({ success: true }) // silent discard
    }

    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.issues[0]?.message ?? "Invalid form data" })
    }

    const data = parsed.data

    // Check SMTP config
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("SMTP not configured — contact form submission received but not sent")
      return res.status(200).json({ success: true }) // Graceful fallback
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Hussnain Bashir Portfolio" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL ?? process.env.SMTP_USER,
      replyTo: data.email,
      subject: `New inquiry: ${data.projectType} from ${data.name}${data.company ? ` at ${data.company}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1C1C1A;">
          <h2 style="color: #D4952A; margin-bottom: 24px;">New Portfolio Inquiry</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Name</td><td style="padding: 8px 0;">${data.name}</td></tr>
            ${data.company ? `<tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Company</td><td style="padding: 8px 0;">${data.company}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Project Type</td><td style="padding: 8px 0;">${data.projectType}</td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Budget</td><td style="padding: 8px 0;">${data.budget}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #F4F1EC; border-left: 3px solid #D4952A;">
            <p style="font-size: 12px; text-transform: uppercase; color: #888; letter-spacing: 0.08em; margin-bottom: 8px;">Description</p>
            <p style="line-height: 1.6;">${data.description}</p>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return res.status(500).json({ error: "Failed to send message. Please try emailing directly." })
  }
}
