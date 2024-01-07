import prisma from "@/prisma/client";
import {
  CategoryField,
  BookerField,
  PrinterField,
} from "@/app/lib/definitions";

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

// a szabad printerek betöltése új szerződés létrehozásához

export async function loadPrinters() {
  const printers: PrinterField[] = new Array();
  const allprinters: PrinterField[] = await prisma.printer.findMany();
  allprinters.forEach((element) => {
    if (element.status === "SZABAD") {
      printers.push(element);
    }
  });
  return printers;
}
