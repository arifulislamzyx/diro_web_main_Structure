import NextAuth, { Account } from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import { JWT } from 'next-auth/jwt';

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    // Handle the JWT token and store the access token
    async jwt({ token, account }: { token: JWT; account?: Account }) {
      if (account) {
        token.accessToken = account.access_token; // Save the Facebook access token
      }
      return token;
    },
    // Attach the access token to the session object
    async session({ session, token }) {
      session.accessToken = token.accessToken; // Add access token to session
      return session;
    },
  },
  providers: [
    FacebookProvider({
      clientId: process.env.NEXTAUTH_FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.NEXTAUTH_FACEBOOK_CLIENT_SECRET || '',
      authorization: {
        params: {
          scope: 'email, public_profile, ',
          // pages_show_list  pages_read_engagement, pages_manage_metadata
        },
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  debug: true,
});
