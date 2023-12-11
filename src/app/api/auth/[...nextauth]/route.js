import admin from "@/service/admin";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import qs from "qs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "admin-login",
      name: "Credentials",
      credentials: {
        ID: { label: "ID", type: "ID", placeholder: "아이디를 입력해주세요." },
        PW: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { ID, PW } = credentials;
        const res = await admin.loginAdmin({ ID, PW });
        if (res?.data?.data) {
          return res?.data?.data;
        } else return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },

  pages: {
    signIn: "/admin/login",
    signOut: "/admin/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
