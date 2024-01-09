import React from "react";
import { NewWorksheetButton } from "../ui/bookings/buttons";
import Link from "next/link";
import prisma from "@/prisma/client";

const BookingsPage = async () => {
  const bookings = await prisma.booking.findMany({
    include: {
      booker: { select: { name: true, email: true } },
      printer: { include: { category: { select: { fee: true } } } },
    },
  });

  return (
    <div>
      <Link href="/bookings/new">
        <p>Új szerződés</p>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Név</th>
            <th>Email</th>
            <th>Printer</th>
            <th>Serial</th>
            <th>Díj</th>
            <th>Start</th>
            <th>Kedvezmény</th>
            <th>Munkalap</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <th>{booking.id}</th>
              <th>{booking.booker.name}</th>
              <td>{booking.booker.email}</td>
              <td>{booking.printer.name}</td>
              <td>{booking.printer.serial}</td>
              <td>{booking.printer.category.fee}</td>
              <td>{booking.createdAt.toString().slice(0, 16)}</td>
              <td>{booking.discount}</td>
              <td>
                <NewWorksheetButton id={booking.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsPage;
