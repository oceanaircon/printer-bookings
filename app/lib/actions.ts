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
  updateWorksheetSchema,
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

  // szükséges, hogy új szerződés létrejötte után a printer státusza FOGLALT legyen

  await prisma.printer.update({
    where: {
      id: printerId,
    },
    data: {
      status: "FOGLALT",
    },
  });

  revalidatePath("/printers");
  revalidatePath("/bookings");
  redirect("/bookings");
}

export async function createWorksheet(formData: FormData) {
  const { bookingId, serviceId, status } = createWorksheetSchema.parse({
    bookingId: formData.get("bookingId"),
    serviceId: formData.get("serviceId"),
    status: formData.get("status"),
  });

  let hatarido = new Date();
  hatarido.setHours(hatarido.getHours() + 72);

  await prisma.worksheet.create({
    data: {
      bookingId: bookingId,
      serviceId: serviceId,
      repairDeadline: hatarido,
      status: status,
    },
  });

  revalidatePath("/worksheets");
  redirect("/worksheets");
}

// UPDATE

export async function updateBooker(id: number, formData: FormData) {
  const { name, address, taxnumber, phone, email } = createBookerSchema.parse({
    name: formData.get("name"),
    address: formData.get("address"),
    taxnumber: formData.get("taxnumber"),
    phone: formData.get("phone"),
    email: formData.get("email"),
  });

  await prisma.booker.update({
    where: {
      id: id,
    },
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

export async function updatePrinter(id: number, formData: FormData) {
  const { categoryId, serial, name, description, status } =
    createPrinterSchema.parse({
      categoryId: formData.get("categoryId"),
      serial: formData.get("serial"),
      name: formData.get("name"),
      description: formData.get("description"),
      status: formData.get("status"),
    });

  const exists = await prisma.booking.findFirst({
    where: {
      printerId: id,
    },
  });

  // ha a printer szerepel egy szerződésben, az állapota marad FOGLALT

  if (exists) {
    await prisma.printer.update({
      where: {
        id: id,
      },
      data: {
        categoryId: categoryId,
        serial: serial,
        name: name,
        description: description,
        status: "FOGLALT",
      },
    });
  } else {
    await prisma.printer.update({
      where: {
        id: id,
      },
      data: {
        categoryId: categoryId,
        serial: serial,
        name: name,
        description: description,
        status: status,
      },
    });
  }

  revalidatePath("/printers");
  redirect("/printers");
}

export async function updateBooking(id: number, formData: FormData) {
  const { bookerId, printerId, discount } = createBookingSchema.parse({
    bookerId: formData.get("bookerId"),
    printerId: formData.get("printerId"),
    discount: formData.get("discount"),
  });

  await prisma.booking.update({
    where: {
      id: id,
    },
    data: {
      bookerId: bookerId,
      printerId: printerId,
      discount: discount,
    },
  });

  revalidatePath("/bookings");
  redirect("/bookings");
}

export async function updateCategory(id: number, formData: FormData) {
  const { name, fee } = createCategorySchema.parse({
    name: formData.get("name"),
    fee: formData.get("fee"),
  });

  await prisma.category.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      fee: fee,
    },
  });

  revalidatePath("/categories");
  redirect("/categories");
}

export async function updateService(id: number, formData: FormData) {
  const { name } = createServiceSchema.parse({
    name: formData.get("name"),
  });

  await prisma.service.update({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });

  revalidatePath("/services");
  redirect("/services");
}

export async function updateWorksheet(id: number, formData: FormData) {
  const { bookingId, serviceId, repairDeadline, status } =
    updateWorksheetSchema.parse({
      bookingId: formData.get("bookingId"),
      serviceId: formData.get("serviceId"),
      repairDeadline: formData.get("repairDeadline"),
      status: formData.get("status"),
    });

  await prisma.worksheet.update({
    where: {
      id: id,
    },
    data: {
      bookingId: bookingId,
      serviceId: serviceId,
      repairDeadline: new Date(repairDeadline),
      status: status,
    },
  });

  revalidatePath("/worksheets");
  redirect("/worksheets");
}

// DELETE

export async function deleteBooker(id: number) {
  await prisma.booker.delete({ where: { id: id } });
  revalidatePath("/bookers");
}

export async function deletePrinter(id: number) {
  await prisma.printer.delete({ where: { id: id } });
  revalidatePath("/printers");
}

export async function deleteCategory(id: number) {
  await prisma.category.delete({ where: { id: id } });
  revalidatePath("/categories");
}

export async function deleteService(id: number) {
  await prisma.service.delete({ where: { id: id } });
  revalidatePath("/service");
}

export async function deleteBooking(id: number) {
  await prisma.booking.delete({ where: { id: id } });
  revalidatePath("/bookings");
}

export async function deleteWorksheet(id: number) {
  await prisma.worksheet.delete({ where: { id: id } });
  revalidatePath("/worksheets");
}
