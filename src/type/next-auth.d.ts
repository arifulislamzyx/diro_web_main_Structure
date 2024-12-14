// import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';

// declare module 'next-auth' {
//   interface Session {
//     user: DefaultSession['user'] & {
//       id: string;
//       accessToken?: string;
//     };
//   }

//   interface User extends DefaultUser {
//     accessToken?: string;
//   }
// }

// declare module 'next-auth/jwt' {
//   interface JWT {
//     accessToken?: string;
//   }
// }

import NextAuth, { type DefaultSession, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

export type ExtendedUser = DefaultSession['user'] & {
  role: 'admin' | 'user';
  id: any;
  isOnboarded: boolean;
  accessToken?: string;
};

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: ExtendedUser;
  }

  interface User {
    id: any;
    role: 'admin' | 'user';
    accessToken: string;
    access_token: string;
    isOnboarded: boolean;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    role: 'admin' | 'user';
    accessToken: string;
    isOnboarded: boolean;
  }
}
