"use strict"
import { google } from "googleapis";
import { createTransport } from "nodemailer";

const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
    const oauth2Client = new OAuth2(
        process.env.OAUTH_CLIENT_ID,
        process.env.OAUTH_CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
        refresh_token: process.env.OAUTH_REFRESH_TOKEN
    });

    const accessToken = await new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
            if (err) {
                reject("Failed to create access token :(");
            }
            resolve(token);
        });
    });

    const transporter = createTransport({
        service: "gmail", 
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.EMAIL_USER,
            accessToken,
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        }
    })

    return transporter;

}


export async function sendMail({ name, email, message }) {

    let transporter = await createTransporter();

    let info = await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_USER,
        subject: "New message from the Nourished contact form",
        text: message,
        html: `<p>from: ${name}</p><p>email: ${email}</p><p>${message}</p>`,
    }).catch(console.error);
        // see https://nodemailer.com/usage
        console.log("info.messageId: " + info.messageId);
        console.log("info.envelope: " + info.envelope);
        console.log("info.accepted: " + info.accepted);
        console.log("info.rejected: " + info.rejected);
        console.log("info.pending: " + info.pending);
        console.log("info.response: " + info.response);

    return info
}