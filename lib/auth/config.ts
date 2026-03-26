import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/db/prisma";
import { Role } from "@prisma/client";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET, // ✅ explicit, stable

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },

  session: { strategy: "jwt" },

  callbacks: {
    async signIn({ user }) {
      // ✅ must return boolean
      if (!user.email) return false;

      // Ensure a user row exists
      const existing = await prisma.user.findUnique({ where: { email: user.email } });
      if (!existing) {
        await prisma.user.create({
          data: {
            email: user.email,
            name: user.name,
            image: user.image,
            role: null,
          },
        });
      }

      return true;
    },

    async jwt({ token, user }) {
      // Persist email once
      if (user?.email) token.email = user.email;

      // Refresh token claims EVERY time when we can identify the user
      const email = (token.email as string | undefined) ?? user?.email;
      if (!email) return token;

      const dbUser = await prisma.user.findUnique({ where: { email } });
      if (dbUser) {
        token.sub = dbUser.id;
        token.role = dbUser.role;
        token.schoolName = dbUser.schoolName;
        token.classSection = dbUser.classSection;
        token.studentId = dbUser.studentId;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = (token.sub as string) || "";
        session.user.email = (token.email as string) || session.user.email; // keep stable
        session.user.role = (token.role as Role | null) ?? null;
        session.user.schoolName = (token.schoolName as string | null) ?? null;
        session.user.classSection = (token.classSection as string | null) ?? null;
        session.user.studentId = (token.studentId as string | null) ?? null;
      }
      return session;
    },

    async redirect({ url, baseUrl }) {
      // Keep it simple and safe
      if (url.startsWith(baseUrl)) return url;
      return `${baseUrl}/dashboard`;
    },
  },
};
