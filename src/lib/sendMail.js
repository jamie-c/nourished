import { createTransport } from "nodemailer";

const transporter = createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

export async function sendMail({ name, email, message, subject }) {
    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: `"${name}" <${email}>`,
            subject,
            text: message,
            html: `<p>from: ${name}</p><p>email: ${email}</p><p>${message}</p>`,
        })
        return true;
    } catch (error) {
        console.error("🚀 ~ sendMail ~ error", error)
        return false;
    }
}
