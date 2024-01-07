import { EnumLike, ZodEnum } from "zod";

export type CategoryField = {
  id: number;
  name: string;
};

export type BookerField = {
  id: number;
  name: string;
};

export type PrinterField = {
  id: number;
  name: string;
  status: "AVAILABLE" | "LEASED";
};
