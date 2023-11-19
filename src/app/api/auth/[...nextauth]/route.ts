import clientPromise from "@/db/mongodb"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
// import jwt from "jsonwebtoken"
// import type { Account, Profile, Session, User } from "next-auth"
import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

const gitHubClientId = process.env.GITHUB_ID!
const gitHubClientSecret = process.env.GITHUB_SECRET!
const googleClientId = process.env.GOOGLE_ID!
const googleClientSecret = process.env.GOOGLE_SECRET!
const emailServer = {
    host: process.env.EMAIL_HOST!,
    port: process.env.EMAIL_PORT!,
    auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
    },
}

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: gitHubClientId,
            clientSecret: gitHubClientSecret,
        }),
        GoogleProvider({
            clientId: googleClientId,
            clientSecret: googleClientSecret,
        }),
        EmailProvider({
            server: emailServer,
            from: `"Nourished Co" <${process.env.EMAIL_FROM}>`,
        }),
    ],
    // pages: {
    //     signIn: "/api/auth/signin",
    //     signOut: "/api/auth/signout",
    //     error: "/api/auth/error",
    // },
    adapter: MongoDBAdapter(clientPromise),
    // secret: process.env.NEXTAUTH_SECRET,
    // jwt: {
    //     async encode({ secret, token }) {
    //         if (!token) throw new Error("No token to encode")
    //         return jwt.sign(token, secret)
    //     },
    //     async decode({ secret, token }) {
    //         if (!token) throw new Error("No token to decode")
    //         const decodedToken = jwt.verify(token, secret)
    //         if (typeof decodedToken === "string") {
    //             return JSON.parse(decodedToken)
    //         } else {
    //             return decodedToken
    //         }
    //     },
    // },
    session: {
        // strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    // callbacks: {
    //     async session(params: { session: session; token: jwt; user: user }) {
    //         if (params.session.user) {
    //             params.session.user.email = params.token.email
    //         }
    //         return params.session
    //     },
    //     async jwt(params: {
    //         token: jwt
    //         user?: user | undefined
    //         account?: account | null | undefined
    //         profile?: profile | undefined
    //         isnewuser?: boolean | undefined
    //     }) {
    //         if (params.user) {
    //             params.token.email = params.user.email
    //         }
    //         return params.token
    //     },
    // },
    theme: {
        colorScheme: "auto",
        logo: `${process.env.NEXTAUTH_URL}/images/NOURISHED_LOGO_NOTAG_WHITE.png`,
        brandColor: "#009681",
        buttonText: "#FFFFFF",
    },
})

export { handler as GET, handler as POST }
