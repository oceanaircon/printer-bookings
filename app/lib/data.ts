import prisma from "@/prisma/client";
import {
  CategoryField,
  BookerField,
  PrinterField,
  BookingField,
  WorksheetField,
} from "@/app/lib/definitions";
import { unstable_noStore as noStore } from "next/cache";

// kategóriák betöltése új printer létrehozásához

export async function loadCategories() {
  const categories: CategoryField[] = await prisma.category.findMany();
  return categories;
}

// ügyfelek betöltése új szerződés létrehozásához

export async function loadBookers() {
  const bookers: BookerField[] = await prisma.booker.findMany();
  return bookers;
}

// a "szabad" printerek betöltése új szerződés létrehozásához

export async function loadPrinters() {
  const printers: PrinterField[] = await prisma.printer.findMany({
    where: {
      status: "SZABAD",
    },
  });
  return printers;
}

export async function loadBookings() {
  const bookings: BookingField[] = await prisma.booking.findMany();
  return bookings;
}

export async function loadPrintersForService() {
  const printers: PrinterField[] = await prisma.printer.findMany({
    where: {
      status: "FOGLALT",
    },
  });
  return printers;
}

export async function loadServices() {
  const services = await prisma.service.findMany();
  return services;
}

export async function fetchWorksheetById(id: number) {
  noStore();

  const data: WorksheetField[] = await prisma.worksheet.findMany();

  const worksheet = data.map((worksheet) => ({
    ...worksheet,
  }));

  return worksheet[0];
}
