import { z } from "zod";

export const createBookerSchema = z.object({
  name: z.string().min(1).max(191),
});
