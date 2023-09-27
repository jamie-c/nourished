import clientPromise from "@/db/mongodb"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        EmailProvider({
            server: {
              host: process.env.EMAIL_HOST,
              port: process.env.EMAIL_PORT,
              auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.APP_PASS
              }
            },
            from: `"Nourished Co" <${process.env.EMAIL_FROM}>`,
          }),
    ],
    adapter: MongoDBAdapter(clientPromise),
    theme: {
        colorScheme: "auto",
        logo: `${process.env.NEXTAUTH_URL}/images/NOURISHED_LOGO_NOTAG_WHITE.png`,
        brandColor: "#009681",
        buttonText: "#FFFFFF"
    }
})

export { handler as GET, handler as POST }
