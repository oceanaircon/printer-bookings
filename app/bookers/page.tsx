import React from "react";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const BookersPage = async () => {
  const bookers = await prisma.booker.findMany();

  return (
    <div>
      <Link href="/bookers/new">
        <Button>Új ügyfél</Button>
      </Link>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Név</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Cím</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Telefon</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Adószám</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {bookers.map((booker) => (
            <Table.Row key={booker.id}>
              <Table.RowHeaderCell>{booker.name}</Table.RowHeaderCell>
              <Table.Cell>{booker.address}</Table.Cell>
              <Table.Cell>{booker.email}</Table.Cell>
              <Table.Cell>{booker.phone}</Table.Cell>
              <Table.Cell>{booker.taxnumber}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default BookersPage;
