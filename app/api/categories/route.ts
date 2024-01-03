import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";
import { createCategorySchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createCategorySchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newCategory = await prisma.category.create({
    data: { name: body.name, fee: body.fee },
  });

  return NextResponse.json(newCategory, { status: 201 });
}
