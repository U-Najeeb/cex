import GoogleProvider from "next-auth/providers/google";
import db from "@/app/db/PrismaClient";
import { Keypair } from "@solana/web3.js";
import { Session } from "next-auth";

export interface session extends Session {
  user: {
    uid: string;
    name: string;
    image: string;
    email: string;
  };
}
export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    session: ({ session, token }: any): session => {
      const newSession: session = session;
      if (!newSession.user && token.uid) {
        // @ts-ignore
        newSession.user.uid = token.uid ?? "";
      }
      return newSession!;
    },
    async jwt({ token, account, profile }: any) {
      const user = await db.user.findFirst({
        where: {
          sub: account?.providerAccountId ?? "",
        },
      });
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    async signIn({ user, account, profile }: any) {
      if (account?.provider === "google") {
        const email = user.email;
        if (!email) {
          return false;
        }

        const userDb = await db.user.findFirst({
          where: {
            username: email,
          },
        });

        if (userDb) {
          return true;
        }

        const keypair = Keypair.generate();
        const publicKey = keypair.publicKey.toBase58();
        const privateKey = keypair.secretKey;

        await db.user.create({
          data: {
            username: email,
            //@ts-ignore
            name: profile?.name,
            profilePicture: profile?.picture,
            provider: "Google",
            sub: account.providerAccountId,
            SolWallet: {
              create: {
                publicKey: publicKey,
                privateKey: privateKey.toString(),
              },
            },
            InrWallet: {
              create: {
                balance: 0,
              },
            },
          },
        });

        return true;
      }

      return false;
    },
  },
};
