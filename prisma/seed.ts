import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("test", 12);
  const user = await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: {},
    create: {
      email: "test@test.com",
      name: "Test User",
      password,
    },
  });
  console.log({ user });

  const booker = await prisma.booker.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Teszt Bérlő",
      address: "8000 Székesfehérvár, Fő utca 1.",
    },
  });
  console.log({ booker });

  const category = await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Teszt Kategória",
      fee: 100,
    },
  });
  console.log({ category });

  const printer = await prisma.printer.upsert({
    where: { categoryId: 1 },
    update: {},
    create: {
      name: "Teszt Printer",
      serial: "12345678ABCD",
      busy: false,
      categoryId: 1,
    },
  });
  console.log({ printer });

  const maintenance = await prisma.maintenance.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Teszt Munka",
    },
  });
  console.log({ maintenance });

  const service = await prisma.service.upsert({
    where: { printerId: 1 },
    update: {},
    create: {
      maintenanceId: 1,
      printerId: 1,
    },
  });
  console.log({ service });

  const booking = await prisma.booking.upsert({
    where: { bookerId: 1 },
    update: {},
    create: {
      bookerId: 1,
      printerId: 1,
      serviceId: 1,
    },
  });
  console.log({ booking });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
