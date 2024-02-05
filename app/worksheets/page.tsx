import React from "react";
import prisma from "@/prisma/client";
import { UpdateWorksheet } from "../ui/buttons";
import { DeleteWorksheet } from "../ui/deletebuttons";

const WorksheetsPage = async () => {
  const worksheets = await prisma.worksheet.findMany({
    include: {
      booking: {
        include: {
          booker: {},
          printer: {},
        },
      },
      service: {},
    },
  });

  return (
    <div className="my-4 py-5">
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
            {worksheets.map((worksheet) => (
              <tr key={worksheet.id}>
                <th>{worksheet.id}</th>
                <th>{worksheet.errorReportingTime.toString().slice(0, 16)}</th>
                <td>{worksheet.booking.booker.name}</td>
                <td>{worksheet.booking.booker.address}</td>
                <td>{worksheet.booking.booker.phone}</td>
                <td>{worksheet.booking.booker.email}</td>
                <td>{worksheet.booking.printer.serial}</td>
                <td>{worksheet.booking.printer.name}</td>
                <td>{worksheet.service.name}</td>
                <td>{worksheet.repairDeadline.toString().slice(0, 16)}</td>
                <td>{worksheet.status}</td>
                <td>
                  <div className="container">
                  <div className="row">
                    <div className="col-6">
                  <UpdateWorksheet id={worksheet.id}></UpdateWorksheet>
                    </div>
                    <div className="col-6">
                  <DeleteWorksheet id={worksheet.id}></DeleteWorksheet>
                    </div>
                  </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorksheetsPage;
