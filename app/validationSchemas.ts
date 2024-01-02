import { z } from "zod";

export const createBookerSchema = z.object({
  name: z.string().min(1).max(191),
});

export const createBookingSchema = z.object({
  bookerId: z.number().min(1).max(8),
  printerId: z.number().min(1).max(8),
  discount: z.number().min(1).max(8),
  serviceId: z.number().min(1).max(8),
});

export const createPrinterSchema = z.object({
  categoryId: z.number().min(1).max(8),
  serial: z.string().min(1).max(191),
  name: z.string().min(1).max(191),
  description: z.string().min(1).max(191),
  busy: z.boolean(),
});
