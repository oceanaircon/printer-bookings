import React from "react";
import { UpdatePrinter } from "../buttons";
import { DeletePrinter } from "../deletebuttons";
import { fetchFilteredPrinters } from "../../lib/data";

export default async function PrintersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const printers = await fetchFilteredPrinters(query, currentPage);

  return (
    <div className="py-3">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cikkszám</th>
            <th>Név</th>
            <th>Kategória</th>
            <th>Leírás</th>
            <th>Állapot</th>
          </tr>
        </thead>
        <tbody>
          {printers?.map((printer) => (
            <tr key={printer.id}>
              <th>{printer.id}</th>
              <th>{printer.serial}</th>
              <td>{printer.name}</td>
              <td>{printer.category.name}</td>
              <td>{printer.description}</td>
              <td>{printer.status}</td>
              <td>
                <UpdatePrinter id={printer.id} />
                <DeletePrinter id={printer.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
