import React from "react";
import Link from "next/link";
import prisma from "../../prisma/client";

const PrintersPage = async () => {
  const printers = await prisma.printer.findMany({
    include: { category: { select: { name: true } } },
  });

  return (
    <div>
      <Link href="/printers/new">
        <p>Új printer</p>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Cikkszám</th>
            <th>Név</th>
            <th>Kategória</th>
            <th>Leírás</th>
            <th>Foglalt</th>
          </tr>
        </thead>
        <tbody>
          {printers.map((printer) => (
            <tr key={printer.id}>
              <th>{printer.serial}</th>
              <td>{printer.name}</td>
              <td>{printer.category.name}</td>
              <td>{printer.description}</td>
              <td>{printer.busy ? "igen" : "nem"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrintersPage;
