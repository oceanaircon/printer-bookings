import prisma from "@/prisma/client";
import {
  CategoryField,
  BookerField,
  PrinterField,
  BookingField,
} from "@/app/lib/definitions";
import { unstable_noStore as noStore } from "next/cache";

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

export async function fetchWorksheetByIdToPDF(id: number) {
  try {
    const worksheet = await prisma.worksheet.findFirst({
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
        id: Number(id),
      },
    });

    return worksheet as any;
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

async function getFeesPerMonth() {
  noStore();

  type printerData = [{ fee: number; month: number }];
  let feesPerMonth: printerData;

  try {
    feesPerMonth =
      await prisma.$queryRaw`SELECT COUNT(*) AS "bookers", SUM(Category.fee) AS "fee", MONTH(createdAt) AS "month" FROM Booking 
      INNER JOIN Printer ON Booking.printerId = Printer.id 
      INNER JOIN Category ON Printer.categoryId = Category.id
      WHERE YEAR(createdAt) = (YEAR(CURDATE())-1)
      GROUP BY MONTH(createdAt)
      ORDER BY MONTH(createdAt);`;

    console.log(feesPerMonth);
    return feesPerMonth;
  } catch (error) {
    console.error("Hiba: havi bevétel lekérdezés");
  }
}

export async function fetchCardData() {
  noStore();
  let incomes = (await getChartData()).income;

  try {
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
      pendingWorksheetsPromise,
      closedWorksheetsPromise,
    ]);

    let yearIncome = 0;
    for (let index = 0; index < incomes.length; index++) {
      const element = incomes[index];
      yearIncome += Number(element);
    }

    const monthlyIncome = Math.floor(yearIncome / 12);
    const pendingWorksheets = Number(data[0] ?? "0");
    const closedWorksheets = Number(data[1] ?? "0");

    return {
      monthlyIncome,
      yearIncome,
      pendingWorksheets,
      closedWorksheets,
    } as any;
  } catch (error) {
    console.error("Hiba: fetchCardData");
  }
}

export const getChartData = async () => {
  noStore();

  let bookers = [];
  let income = [];

  const feesPerMonth = (await getFeesPerMonth()) as any;
  income[0] = Number(feesPerMonth[0].fee);

  for (let index = 1; index < feesPerMonth.length; index++) {
    const element = feesPerMonth[index];
    income[index] = Number(element.fee) + income[index - 1];
  }

  for (let index = 0; index < feesPerMonth.length; index++) {
    const element = feesPerMonth[index];
    bookers[index] = Number(Number(element.bookers) * 10000);
  }

  console.log(bookers, income);
  return { bookers, income };
};

export async function getDoughnutData() {
  noStore();

  try {
    const repairingPrintersPromise = await prisma.worksheet.count({
      where: {
        status: "FOLYAMATBAN",
      },
    });

    const repairedPrintersPromise = await prisma.worksheet.count({
      where: {
        status: "BEFEJEZETT",
      },
    });

    const allPrintersPromise = await prisma.printer.count();

    const data = await Promise.all([
      repairingPrintersPromise,
      repairedPrintersPromise,
      allPrintersPromise,
    ]);

    const repairingPrinters = data[0];
    const repairedPrinters = data[1];
    const allPrinters = data[2];
    const newPrinters = allPrinters - repairedPrinters - repairingPrinters;

    return { repairingPrinters, repairedPrinters, newPrinters };
  } catch (error) {
    console.error("Hiba: doughnut adat lekérdezés");
  }
}

// A lejárt munkalap állapota BEFEJEZETT ******************************************

const ActualDate = Number(Date.now());
export async function updateWorksheetStatus() {
  noStore();
  const statuses = await prisma.worksheet.findMany({
    select: {
      id: true,
      repairDeadline: true,
      status: true,
    },
  });

  statuses.forEach(async (element) => {
    if (Number(element.repairDeadline) < ActualDate) {
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
