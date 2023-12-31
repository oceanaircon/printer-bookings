import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";
import { createBookerSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createBookerSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newBooker = await prisma.booker.create({
    data: { name: body.name },
  });

  return NextResponse.json(newBooker, { status: 201 });
}
