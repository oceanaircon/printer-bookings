"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createPrinterSchema,
  createBookerSchema,
  createCategorySchema,
  createServiceSchema,
  createBookingSchema,
  createWorksheetSchema,
} from "./validationSchemas";

export async function createPrinter(formData: FormData) {
  const { categoryId, serial, name, description, status } =
    createPrinterSchema.parse({
      categoryId: formData.get("categoryId"),
      serial: formData.get("serial"),
      name: formData.get("name"),
      description: formData.get("description"),
      status: formData.get("status"),
    });

  await prisma.printer.create({
    data: {
      categoryId: categoryId,
      serial: serial,
      name: name,
      description: description,
      status: status,
    },
  });

  revalidatePath("/printers");
  redirect("/printers");
}

export async function createBooker(formData: FormData) {
  const { name, address, taxnumber, phone, email } = createBookerSchema.parse({
    name: formData.get("name"),
    address: formData.get("address"),
    taxnumber: formData.get("taxnumber"),
    phone: formData.get("phone"),
    email: formData.get("email"),
  });

  await prisma.booker.create({
    data: {
      name: name,
      address: address,
      taxnumber: taxnumber,
      phone: phone,
      email: email,
    },
  });

  revalidatePath("/bookers");
  redirect("/bookers");
}

export async function createCategory(formData: FormData) {
  const { name, fee } = createCategorySchema.parse({
    name: formData.get("name"),
    fee: formData.get("fee"),
  });

  await prisma.category.create({
    data: {
      name: name,
      fee: fee,
    },
  });

  revalidatePath("/categories");
  redirect("/categories");
}

export async function createService(formData: FormData) {
  const { name } = createServiceSchema.parse({
    name: formData.get("name"),
  });

  await prisma.service.create({
    data: {
      name: name,
    },
  });

  revalidatePath("/services");
  redirect("/services");
}

export async function createBooking(formData: FormData) {
  const { bookerId, printerId, discount } = createBookingSchema.parse({
    bookerId: formData.get("bookerId"),
    printerId: formData.get("printerId"),
    discount: formData.get("discount"),
  });

  await prisma.booking.create({
    data: {
      bookerId: bookerId,
      printerId: printerId,
      discount: discount,
    },
  });

  revalidatePath("/bookings");
  redirect("/bookings");
}
