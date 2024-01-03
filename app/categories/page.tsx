import React from "react";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "../../prisma/client";

const CategoriesPage = async () => {
  const categories = await prisma.category.findMany();

  return (
    <div>
      <Link href="/categories/new">
        <Button>Új kategória</Button>
      </Link>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Név</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Díj</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {categories.map((category) => (
            <Table.Row key={category.id}>
              <Table.RowHeaderCell>{category.name}</Table.RowHeaderCell>
              <Table.Cell>{category.fee}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default CategoriesPage;
