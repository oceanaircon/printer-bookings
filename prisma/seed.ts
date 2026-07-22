import "dotenv/config";
import prisma from "./client";

const SEED_USER_ID = "seed_user_placeholder";

async function main() {
  const user = await prisma.user.upsert({
    where: { userId: SEED_USER_ID },
    update: {},
    create: {
      userId: SEED_USER_ID,
      email: "seed.user@example.com",
      name: "Seed User",
    },
  });
  console.log({ user });

  const categoryData = [
    { name: "Kisirodai", fee: 15000 },
    { name: "Nagyteljesítményű", fee: 35000 },
    { name: "Prémium", fee: 60000 },
  ];
  const categories = [];
  for (const data of categoryData) {
    const category = await prisma.category.create({ data });
    categories.push(category);
    console.log({ category });
  }

  const bookerData = [
    {
      name: "Kovács Kft.",
      address: "1051 Budapest, Vörösmarty tér 1.",
      taxnumber: "12345678-1-42",
      phone: "+36301234567",
      email: "kovacs.kft@example.com",
    },
    {
      name: "Nagy Bt.",
      address: "6720 Szeged, Dugonics tér 2.",
      taxnumber: "23456789-1-06",
      phone: "+36302345678",
      email: "nagy.bt@example.com",
    },
    {
      name: "Szabó és Társa Kft.",
      address: "4025 Debrecen, Piac utca 10.",
      taxnumber: "34567890-1-09",
      phone: "+36303456789",
      email: "szabo.tarsa@example.com",
    },
    {
      name: "Tóth Iroda Zrt.",
      address: "7621 Pécs, Király utca 5.",
      taxnumber: "45678901-1-02",
      phone: "+36304567890",
      email: "toth.iroda@example.com",
    },
    {
      name: "Horváth Solutions Kft.",
      address: "9021 Győr, Baross Gábor út 20.",
      taxnumber: "56789012-1-08",
      phone: "+36305678901",
      email: "horvath.solutions@example.com",
    },
  ];
  const bookers = [];
  for (const data of bookerData) {
    const booker = await prisma.booker.create({ data });
    bookers.push(booker);
    console.log({ booker });
  }

  const printerData = [
    {
      name: "Develop Ineo 250i",
      description: "Kompakt kisirodai multifunkciós nyomtató.",
      categoryId: categories[0].id,
      status: "SZABAD" as const,
    },
    {
      name: "Konica Minolta Bizhub C300i",
      description: "Színes, nagyteljesítményű irodai nyomtató.",
      categoryId: categories[1].id,
      status: "SZABAD" as const,
    },
    {
      name: "Xerox VersaLink C7000",
      description: "Prémium kategóriás, gyors színes nyomtató.",
      categoryId: categories[2].id,
      status: "SZABAD" as const,
    },
    {
      name: "HP LaserJet Pro M404dn",
      description: "Megbízható fekete-fehér lézernyomtató.",
      categoryId: categories[0].id,
      status: "SZABAD" as const,
    },
    {
      name: "Canon imageRUNNER C3226i",
      description: "Sokoldalú, nagy teherbírású multifunkciós gép.",
      categoryId: categories[1].id,
      status: "SZABAD" as const,
    },
  ];
  const printers = [];
  for (const data of printerData) {
    const serial = String(Math.floor(Math.random() * 90000) + 10000);
    const printer = await prisma.printer.create({
      data: { ...data, serial },
    });
    printers.push(printer);
    console.log({ printer });
  }

  const serviceData = [
    { name: "Toner csere" },
    { name: "Papírelakadás javítása" },
    { name: "Általános karbantartás" },
    { name: "Hálózati beállítás" },
  ];
  const services = [];
  for (const data of serviceData) {
    const service = await prisma.service.create({ data });
    services.push(service);
    console.log({ service });
  }

  const bookingsToCreate = [
    { booker: bookers[0], printer: printers[0], discount: 0 },
    { booker: bookers[1], printer: printers[1], discount: 10 },
    { booker: bookers[2], printer: printers[2], discount: 5 },
  ];
  const bookings = [];
  for (const { booker, printer, discount } of bookingsToCreate) {
    const booking = await prisma.booking.create({
      data: {
        bookerId: booker.id,
        printerId: printer.id,
        discount,
        createdBy: SEED_USER_ID,
      },
    });
    await prisma.printer.update({
      where: { id: printer.id },
      data: { status: "FOGLALT" },
    });
    bookings.push(booking);
    console.log({ booking });
  }

  const worksheetsToCreate = [
    {
      booking: bookings[0],
      service: services[0],
      status: "FOLYAMATBAN" as const,
    },
    {
      booking: bookings[1],
      service: services[1],
      status: "BEFEJEZETT" as const,
    },
  ];
  for (const { booking, service, status } of worksheetsToCreate) {
    const repairDeadline = new Date();
    repairDeadline.setHours(repairDeadline.getHours() + 72);

    const worksheet = await prisma.worksheet.create({
      data: {
        bookingId: booking.id,
        serviceId: service.id,
        repairDeadline,
        status,
        createdBy: SEED_USER_ID,
      },
    });
    console.log({ worksheet });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
