import {Prisma, PrismaClient} from "@prisma/client";
import * as trpc from "@trpc/server";
import { CreateHTTPContextOptions } from "@trpc/server/dist/declarations/src/adapters/standalone";

// The app's context - is generated for each incoming request
export const createContext = async (opts?: CreateHTTPContextOptions) =>  {
  const prisma = new PrismaClient();

  async function getUserFromHeader() {
    if (opts?.req.headers.authorization) {
      
      const user_id = 0;
      const user = await prisma.users.findUnique({
        where: {
          user_id: user_id,
        },
      });
      return user;
    }
    return null;
  }
  
  const user = await getUserFromHeader();

  return {
    user,
    prisma,
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;