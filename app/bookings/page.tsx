import React from "react";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "../../prisma/client";

const BookingsPage = async () => {
  const bookings = await prisma.booking.findMany({
    include: {
      booker: { select: { name: true, email: true } },
      printer: { select: { name: true } },
      service: { include: { maintenance: { select: { name: true } } } },
    },
  });

  return (
    <div>
      <Link href="/bookings/new">
        <Button>Új bérlet</Button>
      </Link>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Név</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Printer</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Start</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Kedvezmény</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Munka</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {bookings.map((booking) => (
            <Table.Row key={booking.id}>
              <Table.RowHeaderCell>{booking.booker.name}</Table.RowHeaderCell>
              <Table.Cell>{booking.booker.email}</Table.Cell>
              <Table.Cell>{booking.printer.name}</Table.Cell>
              <Table.Cell>
                {booking.createdAt.toString().slice(0, 16)}
              </Table.Cell>
              <Table.Cell>{booking.discount}</Table.Cell>
              <Table.Cell>{booking.service.maintenance.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default BookingsPage;
