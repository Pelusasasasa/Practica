import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

let prisma: PrismaClient;

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({ adapter });
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient({ adapter });
  }
  prisma = (global as any).prisma;
}

export default prisma;
