import NextAuth from "next-auth"
import { prisma } from "@/config/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
})