import { z } from "zod";

export const createBookerSchema = z.object({
  name: z.string().min(1).max(191),
  email: z.string().min(1),
});

export const createBookingSchema = z.object({
  id: z.number(),
  printerId: z.number(),
  discount: z.number(),
});

export const createCategorySchema = z.object({
  name: z.string().min(1),
  fee: z.number(),
});

export const createPrinterSchema = z.object({
  categoryId: z.number().min(1).max(8),
  serial: z.string().min(1).max(191),
  name: z.string().min(1).max(191),
  description: z.string().min(1).max(191),
  busy: z.boolean(),
});
