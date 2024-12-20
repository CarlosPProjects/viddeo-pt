import NextAuth from "next-auth"

import Credentials from 'next-auth/providers/credentials'

import { prisma } from "@/config/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { caller } from "./app/server/routers/_app"
import { TRPCError } from "@trpc/server"


const providers = [
  Credentials({
    credentials: {
      name: { label: "Name", type: "text" },
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    authorize: async (credentials) => {
      if (!credentials?.email || !credentials?.password) {
        return null;
      }

      try {
        const user = await caller({ db: prisma }).user.getUserByEmail({ email: credentials.email as string });
        
        await caller({ db: prisma }).user.validateUserPassWord({ email: credentials.email as string, password: credentials.password as string });

        return user;
      } catch (error) {
        if (error instanceof TRPCError) {
          console.error('Authentication error:', error.message);
        } else {
          console.error('Unexpected error during authentication:', error);
        }
        return null;
      }
    },
  })
]

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  providers,
})