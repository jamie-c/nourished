import clientPromise from "@/db/mongodb"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import google from "next-auth/providers/google"
import Nodemailer from "next-auth/providers/nodemailer"

import type { NextAuthConfig } from "next-auth"

export const config = {
  theme: {
        colorScheme: "auto",
        logo: `${process.env.NEXTAUTH_URL}/images/NOURISHED_LOGO_NOTAG_WHITE.png`,
        brandColor: "#009681",
        buttonText: "#FFFFFF",
    },
  providers: [
    GitHub,
    google,
    Nodemailer({
      server: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
      adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === "/middleware-example") return !!auth
      return true
    },
  },
} satisfies NextAuthConfig

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(config)