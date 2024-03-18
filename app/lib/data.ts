import prisma from "@/prisma/client";
import {
  CategoryField,
  BookerField,
  PrinterField,
  BookingField,
} from "@/app/lib/definitions";
import { unstable_noStore as noStore } from "next/cache";
import { number } from "zod";

// darab / oldal *********************************************************

const ITEMS_PER_PAGE = 8;

// aktív userid lekérdezése

// kategóriák betöltése új printer létrehozásához

export async function loadCategories() {
  const categories: CategoryField[] = await prisma.category.findMany();
  return categories;
}

// ügyfelek betöltése új szerződés létrehozásához

export async function loadBookers() {
  const bookers: BookerField[] = await prisma.booker.findMany();
  return bookers;
}

// a "szabad" printerek betöltése új szerződés létrehozásához

export async function loadPrinters() {
  const printers: PrinterField[] = await prisma.printer.findMany({
    where: {
      status: "SZABAD",
    },
  });
  return printers;
}

export async function loadBookings() {
  const bookings: BookingField[] = await prisma.booking.findMany();
  return bookings;
}

export async function loadPrintersForService() {
  const printers: PrinterField[] = await prisma.printer.findMany({
    where: {
      status: "FOGLALT",
    },
  });
  return printers;
}

export async function loadServices() {
  const services = await prisma.service.findMany();
  return services;
}

// id alapján kiválasztott rekordok UPDATE és DELETE funkciókhoz

export async function fetchBookingById(id: number) {
  noStore();

  const booking = await prisma.booking.findFirst({
    where: {
      id: Number(id),
    },
  });

  return booking as any;
}

export async function fetchBookerById(id: number) {
  noStore();

  const booker = await prisma.booker.findFirst({
    where: {
      id: Number(id),
    },
  });

  return booker as any;
}

export async function fetchPrinterById(id: number) {
  noStore();

  const printer = await prisma.printer.findFirst({
    where: {
      id: Number(id),
    },
  });

  return printer as any;
}

export async function fetchCategoryById(id: number) {
  noStore();

  const category = await prisma.category.findFirst({
    where: {
      id: Number(id),
    },
  });

  return category as any;
}

export async function fetchServiceById(id: number) {
  noStore();

  const service = await prisma.service.findFirst({
    where: {
      id: Number(id),
    },
  });

  return service as any;
}

export async function fetchWorksheetById(id: number) {
  noStore();

  const worksheet = await prisma.worksheet.findFirst({
    where: {
      id: Number(id),
    },
  });

  return worksheet as any;
}

// a kereséshez és a táblázatban való megjelenítéshez szükséges lekérdezések **************

export async function fetchFilteredBookings(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    /*     const bookings = await prisma.$queryRaw(
      Prisma.sql`SELECT Booking.id, 
      Booker.name, Booker.email, 
      Printer.name, Printer.serial,
      Category.fee, 
      Booking.createdAt, Booking.discount 
      FROM Booking, Printer
      INNER JOIN Booker ON Booker.id = Booking.bookerId
      INNER JOIN Printer ON Printer.id = Booking.printerId
      INNER JOIN Category ON Category.id = Printer.categoryId
      Booker.name LIKE ${`%${query}%`} OR
      Booker.email LIKE ${`%${query}%`}
      ORDER BY Booking.createdAt DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`
    ); */

    const bookings = await prisma.booking.findMany({
      select: {
        id: true,
        booker: {
          select: {
            name: true,
            email: true,
          },
        },
        printer: {
          select: {
            name: true,
            serial: true,
            category: {
              select: {
                fee: true,
              },
            },
          },
        },
        createdAt: true,
        discount: true,
      },
      where: {
        OR: [
          {
            booker: {
              name: {
                contains: query,
              },
            },
          },
          {
            booker: {
              email: {
                contains: query,
              },
            },
          },
          {
            printer: {
              serial: {
                contains: query,
              },
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      take: ITEMS_PER_PAGE,
      skip: offset,
    });

    return bookings;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Hiba a lekérdezésben.");
  }
}

export async function fetchFilteredBookers(query: string, currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const bookers = await prisma.booker.findMany({
      select: {
        id: true,
        name: true,
        address: true,
        taxnumber: true,
        phone: true,
        email: true,
      },
      where: {
        OR: [
          {
            name: {
              contains: query,
            },
          },
          {
            email: {
              contains: query,
            },
          },
          {
            address: {
              contains: query,
            },
          },
        ],
      },
      orderBy: {
        name: "asc",
      },
      take: ITEMS_PER_PAGE,
      skip: offset,
    });
    return bookers;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Hiba a lekérdezésben.");
  }
}

export async function fetchFilteredPrinters(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const printers = await prisma.printer.findMany({
      select: {
        id: true,
        category: true,
        name: true,
        serial: true,
        description: true,
        status: true,
      },
      where: {
        OR: [
          {
            name: {
              contains: query,
            },
          },
          {
            serial: {
              contains: query,
            },
          },
        ],
      },

      take: ITEMS_PER_PAGE,
      skip: offset,
    });
    return printers;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Hiba a lekérdezésben.");
  }
}

export async function fetchFilteredWorksheets(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const worksheets = await prisma.worksheet.findMany({
      select: {
        id: true,
        errorReportingTime: true,
        repairDeadline: true,
        booking: {
          select: {
            booker: {
              select: {
                name: true,
                email: true,
                address: true,
                phone: true,
              },
            },
            printer: {
              select: {
                name: true,
                serial: true,
                category: {
                  select: {
                    fee: true,
                  },
                },
              },
            },
          },
        },
        service: {
          select: {
            name: true,
          },
        },
        status: true,
      },
      where: {
        OR: [
          {
            booking: {
              booker: {
                name: {
                  contains: query,
                },
              },
            },
          },
          {
            booking: {
              printer: {
                name: {
                  contains: query,
                },
              },
            },
          },
          {
            service: {
              name: {
                contains: query,
              },
            },
          },
        ],
      },

      take: ITEMS_PER_PAGE,
      skip: offset,
    });
    return worksheets;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Hiba a lekérdezésben.");
  }
}

export async function fetchFilteredServices(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const services = await prisma.service.findMany({
      select: {
        id: true,
        name: true,
      },
      where: {
        OR: [
          {
            name: {
              contains: query,
            },
          },
        ],
      },
    });
    return services;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Hiba a lekérdezésben.");
  }
}
// FŐOLDALI KÁRTYÁK ************************************************************

export async function fetchCardData() {
  try {
    const monthlyIncomePromise =
      await prisma.$queryRaw`SELECT SUM(Category.fee) FROM Booking 
        INNER JOIN Printer ON Booking.printerId = Printer.id 
        INNER JOIN Category ON Printer.categoryId = Category.id;`;

    const pendingWorksheetsPromise = await prisma.worksheet.count({
      where: {
        status: "FOLYAMATBAN",
      },
    });

    const closedWorksheetsPromise = await prisma.worksheet.count({
      where: {
        status: "BEFEJEZETT",
      },
    });

    const data = await Promise.all([
      monthlyIncomePromise,
      pendingWorksheetsPromise,
      closedWorksheetsPromise,
    ]);

    const monthlyIncome = Number(JSON.stringify(data[0]).slice(23, 28) ?? "0");
    const yearIncome = monthlyIncome * 12;
    const pendingWorksheets = Number(data[1] ?? "0");
    const closedWorksheets = Number(data[2] ?? "0");

    return {
      monthlyIncome,
      yearIncome,
      pendingWorksheets,
      closedWorksheets,
    } as any;
  } catch (error) {
    error;
  }
}

export const getChartData = async () => {
  const date = new Date();
  const currentyear = date.getFullYear();
  let bookers = [1, 4, 8, 12, 16, 22, 30, 32, 38, 40, 44, 50];
  let income = [
    35000, 120000, 240000, 300000, 400000, 560000, 850000, 1200000, 1340000,
    1450000, 1800000, 2200000,
  ];
  try {
    /*     const bookingCounts = await prisma.booking.groupBy({
      by: ["createdAt"],
      _count: {
        bookerId: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    const bookersArray = bookingCounts.map((bookingCount) => ({
      year: bookingCount.createdAt.getFullYear(),
      month: bookingCount.createdAt.getMonth(),
      count: bookingCount._count.bookerId,
    }));

    let countSum = 0;
    for (let index = 0; index < 12; index++) {
      const element = bookersArray[index];
      if (element.year == currentyear) {
        bookersArray[-1].count = 0;
        countSum += bookersArray[index - 1].count;
        bookers[index] = element.count + countSum;
      }
    }

    const bookingData = await prisma.booking.findMany({
      select: {
        printer: {
          select: {
            category: {
              select: { fee: true },
            },
          },
        },
        createdAt: true,
      },
      where: {
        createdAt: {
          gte: new Date("2024-01-01T00:00:00Z"),
          lt: new Date("2025-01-01T00:00:00Z"),
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    const formattedData = bookingData.map((booking) => {
      return {
        fee: booking.printer.category.fee,
        Year: booking.createdAt.getFullYear(),
        Month: booking.createdAt.getMonth() + 1,
      };
    });

    let sumFee = 0;
    for (let index = 1; index < 13; index++) {
      const element = formattedData[index];
      formattedData[-1].fee = 0;
      sumFee += formattedData[index - 1].fee;
      income[index] = element.fee + sumFee;
    } */

    return { bookers, income };
  } catch (error) {
    console.error("Hiba");
  }
};

// A lejárt munkalap állapota BEFEJEZETT ******************************************

export async function updateWorksheetStatus() {
  const statuses = await prisma.worksheet.findMany({
    select: {
      id: true,
      repairDeadline: true,
      status: true,
    },
  });

  statuses.forEach(async (element) => {
    if (Number(element.repairDeadline) < Number(Date.now())) {
      await prisma.worksheet.update({
        where: {
          id: element.id,
        },
        data: {
          status: "BEFEJEZETT",
        },
      });
    }
  });
}

// LAPOZÁS **********************************************************************

export async function fetchWorksheetPages(query: string) {
  noStore();
  try {
    const count = await prisma.worksheet.count({
      where: {
        OR: [
          {
            booking: {
              booker: {
                name: {
                  contains: query,
                },
              },
            },
          },

          {
            booking: {
              printer: {
                name: {
                  contains: query,
                },
              },
            },
          },
          {
            service: {
              name: {
                contains: query,
              },
            },
          },
        ],
      },
    });

    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Nem sikerült megszámolni az oldalakat.");
  }
}

export async function fetchBookerPages(query: string) {
  noStore();
  try {
    const count = await prisma.booker.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
            },
          },
          {
            address: {
              contains: query,
            },
          },
          {
            email: {
              contains: query,
            },
          },
        ],
      },
    });

    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Nem sikerült megszámolni az oldalakat.");
  }
}

export async function fetchBookingPages(query: string) {
  noStore();
  try {
    const count = await prisma.booking.count({
      where: {
        OR: [
          {
            booker: {
              name: {
                contains: query,
              },
            },
          },
          {
            booker: {
              email: {
                contains: query,
              },
            },
          },
          {
            printer: {
              serial: {
                contains: query,
              },
            },
          },
        ],
      },
    });

    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Nem sikerült megszámolni az oldalakat.");
  }
}

export async function fetchPrinterPages(query: string) {
  try {
    const count = await prisma.printer.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
            },
          },
          {
            serial: {
              contains: query,
            },
          },
        ],
      },
    });

    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Nem sikerült megszámolni az oldalakat.");
  }
}
