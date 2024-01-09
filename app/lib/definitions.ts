import { DateTime } from "next-auth/providers/kakao";

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
  serial: string;
  status: "SZABAD" | "FOGLALT";
};

export type BookingField = {
  id: number;
  bookerId: number;
  printerId: number;
  createdAt: Date;
  discount: number;
};

export type ServiceField = {
  id: number;
  name: string;
};

export type WorksheetField = {
  id: number;
  bookingId: number;
  serviceId: number;
  status: "FOLYAMATBAN" | "BEFEJEZETT";
};
