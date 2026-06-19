import { PrismaClient } from "@prisma/client";
import { seedProdutos } from "./seeds/produtos";

const prisma = new PrismaClient();

async function main() {
  await seedProdutos(prisma);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());