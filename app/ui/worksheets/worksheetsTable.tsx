import React from "react";
import { PrintWorksheet, UpdateWorksheet } from "../buttons";
import { DeleteWorksheet } from "../deletebuttons";
import { fetchFilteredWorksheets } from "../../lib/data";
import "../custom.scss";

export default async function WorksheetsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const worksheets = await fetchFilteredWorksheets(query, currentPage);

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Időpont</th>
            <th>Bejelentő</th>
            <th>Cím</th>
            <th>Telefon</th>
            <th>Email</th>
            <th>Printer cikkszám</th>
            <th>Printer</th>
            <th>Hiba neve</th>
            <th>Határidő</th>
            <th>Állapot</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {worksheets?.map((worksheet) => (
            <tr key={worksheet.id}>
              <td data-label="ID">{worksheet.id}</td>
              <td data-label="Időpont">
                {worksheet.errorReportingTime.toString().slice(0, 16)}
              </td>
              <td data-label="Bejelentő">{worksheet.booking.booker.name}</td>
              <td data-label="Cím">{worksheet.booking.booker.address}</td>
              <td data-label="Telefon">{worksheet.booking.booker.phone}</td>
              <td data-label="Email">{worksheet.booking.booker.email}</td>
              <td data-label="Cikkszám">{worksheet.booking.printer.serial}</td>
              <td data-label="Printer">{worksheet.booking.printer.name}</td>
              <td data-label="Hiba neve">{worksheet.service.name}</td>
              <td data-label="Határidő">
                {worksheet.repairDeadline.toString().slice(0, 16)}
              </td>
              <td data-label="Állapot">{worksheet.status}</td>
              <td>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <UpdateWorksheet id={worksheet.id}/>
                    </div>
                    <div className="col">
                      <DeleteWorksheet id={worksheet.id}/>
                    </div>
                    <div className="col">
                      <PrintWorksheet id={worksheet.id}/>
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
