import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const hadle = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {},
});

export { handler as GET, handler as POST };
