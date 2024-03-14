export type User = {
  id: number;
  email: string;
  userId: string;
};

export type CategoryField = {
  id: number;
  name: string;
  fee: number;
};

export type BookerField = {
  id: number;
  name: string;
  address: string;
  taxnumber: string;
  phone: string;
  email: string;
};

export type PrinterField = {
  id: number;
  categoryId: number;
  name: string;
  serial: string;
  description: any;
  status: "SZABAD" | "FOGLALT";
};

export type BookingField = {
  id: number;
  bookerId: number;
  printerId: number;
  createdAt: Date;
  discount: number;
  createdBy: string;
};

export type ServiceField = {
  id: number;
  name: string;
};

export type WorksheetField = {
  id: number;
  bookingId: number;
  serviceId: number;
  createdBy: string;
  status: "FOLYAMATBAN" | "BEFEJEZETT";
};

export type UpdateWorksheetField = {
  id: number;
  bookingId: number;
  serviceId: number;
  repairDeadline: string;
  createdBy: string;
  status: "FOLYAMATBAN" | "BEFEJEZETT";
};
