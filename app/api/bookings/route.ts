import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";
import { createBookingSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createBookingSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newBooking = await prisma.booking.create({
    data: {
      booker: {
        connectOrCreate: {
          where: {
            id: body.bookerId,
          },
          create: {
            name: "Def",
            email: "emil@emil.em",
          },
        },
      },
      printer: {
        connectOrCreate: {
          where: {
            id: body.printerId,
          },
          create: {
            name: "DefaultPrinter",
            serial: "DefaultSerial",
            categoryId: 88888888,
            busy: true,
          },
        },
      },
      discount: body.discount,
    },
    include: {
      booker: true,
      printer: true,
    },
  });

  return NextResponse.json(newBooking, { status: 201 });
}
