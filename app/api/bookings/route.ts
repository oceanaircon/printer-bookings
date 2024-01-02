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
      bookerId: Number(body.bookerId),
      printerId: Number(body.printerId),
      discount: Number(body.discount),
      serviceId: Number(body.serviceId),
    },
  });

  return NextResponse.json(newBooking, { status: 201 });
}
