import React from "react";
import { UpdatePrinter } from "../buttons";
import { DeletePrinter } from "../deletebuttons";
import { fetchFilteredPrinters } from "../../lib/data";
import '../custom.scss';

export default async function PrintersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const printers = await fetchFilteredPrinters(query, currentPage);

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cikkszám</th>
            <th>Név</th>
            <th>Kategória</th>
            <th>Leírás</th>
            <th>Állapot</th>
            <th>
              {" "}
              <a
                href="/printers/new"
                className=" btn btn-secondary btn-sm"
                aria-current="page"
              >
                Új printer
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          {printers?.map((printer) => (
            <tr key={printer.id}>
              <td data-label="ID">{printer.id}</td>
              <td data-label="Cikkszám">{printer.serial}</td>
              <td data-label="Név">{printer.name}</td>
              <td data-label="Kategória">{printer.category.name}</td>
              <td data-label="Leírás">{printer.description}</td>
              <td data-label="Állapot">{printer.status}</td>
              <td>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <UpdatePrinter id={printer.id} />
                    </div>
                    <div className="col-6">
                      <DeletePrinter id={printer.id} />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
