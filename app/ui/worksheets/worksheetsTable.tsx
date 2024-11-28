import { PrintWorksheet, UpdateWorksheet } from "../buttons";
import { DeleteWorksheet } from "../deletebuttons";
import { fetchFilteredWorksheets } from "../../lib/data";
import "../custom.scss";
import { auth } from "@clerk/nextjs";

export default async function WorksheetsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const worksheets = await fetchFilteredWorksheets(query, currentPage);

  const { userId } = auth();

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Time</th>
            <th>Booker</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Serial</th>
            <th>Printer</th>
            <th>Service</th>
            <th>Deadline</th>
            <th>Status</th>
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
              <td data-label="Cikkszám">
                {worksheet.booking.printer
                  ? worksheet.booking.printer.serial
                  : "0"}
              </td>
              <td data-label="Printer">
                {worksheet.booking.printer
                  ? worksheet.booking.printer.name
                  : "DELETED PRINTER"}
              </td>
              <td data-label="Hiba neve">
                {worksheet.service ? worksheet.service.name : "DELETED SERVICE"}
              </td>
              <td data-label="Határidő">
                {worksheet.repairDeadline.toString().slice(0, 16)}
              </td>
              <td data-label="Állapot">{worksheet.status}</td>
              <td>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <UpdateWorksheet id={worksheet.id} />
                    </div>
                    <div
                      className="col"
                      style={{
                        display: userId ? "block" : "none",
                      }}
                    >
                      <DeleteWorksheet id={worksheet.id} />
                    </div>
                    <div className="col">
                      <PrintWorksheet id={worksheet.id} />
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
