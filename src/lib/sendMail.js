"use strict"
import { createTransport } from "nodemailer"

const transporter = createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        accessToken: process.env.EMAIL_ACCESS_TOKEN,
    },
})

export async function sendMail({ name, email, message }) {
    const info = await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_USER,
        subject: "New message from the Nourished contact form",
        text: message,
        html: `<p>from: ${name}</p><p>email: ${email}</p><p>${message}</p>`,
    })

    console.log("Message sent: %s", info.messageId)
}