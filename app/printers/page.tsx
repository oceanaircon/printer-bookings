import React from "react";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "../../prisma/client";

const PrintersPage = async () => {
  const printers = await prisma.printer.findMany({
    include: { category: { select: { name: true } } },
  });

  return (
    <div>
      <Link href="/printers/new">
        <Button>Új printer</Button>
      </Link>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Serial</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Név</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Kategória</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Leírás</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Foglalt</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {printers.map((printer) => (
            <Table.Row key={printer.id}>
              <Table.RowHeaderCell>{printer.serial}</Table.RowHeaderCell>
              <Table.Cell>{printer.name}</Table.Cell>
              <Table.Cell>{printer.category.name}</Table.Cell>
              <Table.Cell>{printer.description}</Table.Cell>
              <Table.Cell>{printer.busy ? "igen" : "nem"}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default PrintersPage;
