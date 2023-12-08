import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "admin-login",
      credentials: {
        ID: { label: "ID", type: "ID", placeholder: "아이디를 입력해주세요." },
        PW: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("credentials", credentials, req);
        return credentials;
      },
    }),
  ],
  // 추가
  pages: {
    signIn: "/admin/login",
  },
});

export { handler as GET, handler as POST };
