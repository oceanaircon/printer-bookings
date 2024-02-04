import prisma from "@/prisma/client";
import {
  CategoryField,
  BookerField,
  PrinterField,
  BookingField,
} from "@/app/lib/definitions";
import { unstable_noStore as noStore } from "next/cache";

// kategóriák betöltése új printer létrehozásához

export async function loadCategories() {
  try{
  const categories: CategoryField[] = await prisma.category.findMany();
  return categories;
} catch (error){
  console.error("Database Error:", error);
  throw new Error("Hiba a betöltésben.");
}
}

// ügyfelek betöltése új szerződés létrehozásához

export async function loadBookers() {
  try{
  const bookers: BookerField[] = await prisma.booker.findMany();
  return bookers;
} catch (error){
  console.error("Database Error:", error);
  throw new Error("Hiba a betöltésben.");
}
}

// a "szabad" printerek betöltése új szerződés létrehozásához

export async function loadPrinters() {
try{
  const printers: PrinterField[] = await prisma.printer.findMany({
    where: {
      status: "SZABAD",
    },
  });
  return printers;
} catch (error){
  console.error("Database Error:", error);
  throw new Error("Hiba a betöltésben.");
}
}

export async function loadBookings() {
  try{
  const bookings: BookingField[] = await prisma.booking.findMany();
  return bookings;
} catch (error){
  console.error("Database Error:", error);
  throw new Error("Hiba a betöltésben.");
}
}

export async function loadPrintersForService() {
  try{
  const printers: PrinterField[] = await prisma.printer.findMany({
    where: {
      status: "FOGLALT",
    },
  });
  return printers;
} catch (error){
  console.error("Database Error:", error);
  throw new Error("Hiba a betöltésben.");
}
}

export async function loadServices() {
  try{
  const services = await prisma.service.findMany();
  return services;
  } catch (error){
    console.error("Database Error:", error);
    throw new Error("Hiba a betöltésben.");
  }
}

// id alapján kiválasztott rekordok UPDATE és DELETE funkciókhoz

export async function fetchBookingById(id: number) {
  noStore();
try{
  const booking = await prisma.booking.findFirst({
    where: {
      id: Number(id),
    },
  });

  return booking as any;
} catch (error) {
  console.error("Database Error:", error);
  throw new Error("Hiba a lekérdezésben.");
}
}

export async function fetchBookerById(id: number) {
  noStore();
try{
  const booker = await prisma.booker.findFirst({
    where: {
      id: Number(id),
    },
  });

  return booker as any;
} catch (error) {
  console.error("Database Error:", error);
  throw new Error("Hiba a lekérdezésben.");
}
}

export async function fetchPrinterById(id: number) {
  noStore();
try{
  const printer = await prisma.printer.findFirst({
    where: {
      id: Number(id),
    },
  });

  return printer as any;
} catch (error) {
  console.error("Database Error:", error);
  throw new Error("Hiba a lekérdezésben.");
}
}

export async function fetchCategoryById(id: number) {
  noStore();
try{
  const category = await prisma.category.findFirst({
    where: {
      id: Number(id),
    },
  });

  return category as any;
} catch (error) {
  console.error("Database Error:", error);
  throw new Error("Hiba a lekérdezésben.");
}
}

export async function fetchServiceById(id: number) {
  noStore();
try{
  const service = await prisma.service.findFirst({
    where: {
      id: Number(id),
    },
  });

  return service as any;
} catch (error) {
  console.error("Database Error:", error);
  throw new Error("Hiba a lekérdezésben.");
}
}

export async function fetchWorksheetById(id: number) {
  noStore();
try{
  const worksheet = await prisma.worksheet.findFirst({
    where: {
      id: Number(id),
    },
  });

  return worksheet as any;
} catch (error) {
  console.error("Database Error:", error);
  throw new Error("Hiba a lekérdezésben.");
}
}

const ITEMS_PER_PAGE = 8;
export async function fetchFilteredBookings(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    /*     const bookings = await prisma.$queryRaw(
      Prisma.sql`SELECT Booking.id, 
      Booker.name, Booker.email, 
      Printer.name, Printer.serial,
      Category.fee, 
      Booking.createdAt, Booking.discount 
      FROM Booking, Printer
      INNER JOIN Booker ON Booker.id = Booking.bookerId
      INNER JOIN Printer ON Printer.id = Booking.printerId
      INNER JOIN Category ON Category.id = Printer.categoryId
      Booker.name LIKE ${`%${query}%`} OR
      Booker.email LIKE ${`%${query}%`}
      ORDER BY Booking.createdAt DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`
    ); */

    const bookings = await prisma.booking.findMany({
      select: {
        id: true,
        booker: {
          select: {
            name: true,
            email: true,
          },
        },
        printer: {
          select: {
            name: true,
            serial: true,
            category: {
              select: {
                fee: true,
              },
            },
          },
        },
        createdAt: true,
        discount: true,
      },
      where: {
        OR: [
          {
            booker: {
              name: {
                contains: query,
              },
            },
          },
          {
            booker: {
              email: {
                contains: query,
              },
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      take: ITEMS_PER_PAGE,
      skip: offset,
    });

    return bookings;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Hiba a lekérdezésben.");
  }
}


export async function fetchFilteredBookers(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const bookers = await prisma.booker.findMany({
    select: {
      id: true,
      name: true,
      address: true,
      taxnumber: true,
      phone: true,
      email: true,
    },
    where: {
      OR: [
        {
          name:{
            contains: query
          }
        },
        {
          email:{
            contains: query
          }
        },
        {
          address:{
            contains: query
          }
        }
      ]
    },
    orderBy: {
      name: "asc",
    },
    take: ITEMS_PER_PAGE,
    skip: offset,

  });
  return bookers;
   } catch(error){
    console.error("Database Error:", error);
    throw new Error("Hiba a lekérdezésben.");
  }
}

export async function fetchFilteredPrinters(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const printers = await prisma.printer.findMany({
      select:{
        id: true,
        category: true,
        name: true,
        serial: true,
        description: true,
        status: true,
      },
      where: {
        OR:[
        {
          name:{
            contains: query
          }
        },
        {
          serial:{
            contains: query
          }
        },
        ]
      }
    })
    return printers;
  } catch(error){
   console.error("Database Error:", error);
   throw new Error("Hiba a lekérdezésben.");
 }
}
