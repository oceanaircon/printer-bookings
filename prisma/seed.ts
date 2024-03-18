import { PrismaClient } from "@prisma/client";
import { promises as fs } from "fs";

const prisma = new PrismaClient();

async function getData() {
  const jsonData = await fs.readFile(
    process.cwd() + "/prisma/users.json",
    "utf-8"
  );
  const users = JSON.parse(jsonData);

  return users;
}

async function main() {
  // const { users } = await getData();

  for (let index = 22; index < 80; index++) {
    // const element = users[index];

    const printerid = Math.floor(Math.random() * 80) + 22;

    const booking = await prisma.booking.upsert({
      where: { id: index },
      update: {},
      create: {
        bookerId: index,
        printerId: printerid,
        createdBy: "user_2dVD3hLSqDhy2HxXtO4u9YohBmW",
      },
    });
    console.log({ booking });

    /*     const serialnum = Math.floor(Math.random() * 100000) + 10000;

    const printer = await prisma.printer.upsert({
      where: { id: index },
      update: {},
      create: {
        name: "Canon IR 3570",
        serial: String(serialnum),
        description:
          "Fast and productive colour A4 multifunction printer, with integrated cloud-based software and smart technologies for secure collaboration from anywhere.",
        categoryId: 2,
      },
    });
    console.log({ printer }); */

    /*    const booker = await prisma.booker.upsert({
      where: { email: element.email },
      update: {
        name: element.firstName + " " + element.lastName,
        address: element.address.address + ", " + element.address.city,
        phone: element.phone,
        email: element.email,
        taxnumber: element.bank.cardNumber,
      },
      create: {
        name: element.firstName + " " + element.lastName,
        address: element.address.address + ", " + element.address.city,
        phone: element.phone,
        email: element.email,
        taxnumber: element.bank.cardNumber,
      },
    });
    console.log({ booker }); */
  }

  /*  const category = await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Teszt Kategória",
      fee: 100,
    },
  });
  console.log({ category });



  const service = await prisma.service.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Teszt Munka",
    },
  });
  console.log({ service });

  

  let hatarido = new Date();
  hatarido.setHours(hatarido.getHours() + 72);

  const worksheet = await prisma.worksheet.upsert({
    where: { id: 1 },
    update: {},
    create: {
      bookingId: 1,
      serviceId: 1,
      repairDeadline: hatarido,
      createdBy: "string",
    },
  });
  console.log({ worksheet });
}
 */
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
