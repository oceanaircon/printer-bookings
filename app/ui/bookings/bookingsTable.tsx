import React from "react";
import { NewWorksheetButton, UpdateBooking } from "../buttons";
import { DeleteBooking } from "../deletebuttons";
import { fetchFilteredBookings } from "../../lib/data";
import "../custom.scss";
import { auth } from "@clerk/nextjs";

export default async function BookingsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const bookings = await fetchFilteredBookings(query, currentPage);

  const { userId } = auth();

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Printer</th>
          <th>Serial</th>
          <th>Fee</th>
          <th>Start</th>
          <th>Discount</th>
          <th>Worksheet</th>
          <th>
            <a
              href="/bookings/new"
              className=" btn btn-secondary btn-sm"
              aria-current="page"
            >
              New Booking
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        {bookings?.map((booking) => (
          <tr key={booking.id}>
            <td data-label="ID">{booking.id}</td>
            <td data-label="Név">{booking.booker.name}</td>
            <td data-label="Email">{booking.booker.email}</td>
            <td data-label="Printer">
              {booking.printer ? booking.printer.name : "TÖRÖLT PRINTER"}
            </td>
            <td data-label="Cikkszám">
              {booking.printer ? booking.printer.serial : "0"}
            </td>
            <td data-label="Díj">
              {booking.printer ? booking.printer.category.fee : "TÖRÖLVE"}
            </td>
            <td data-label="Start">
              {booking.createdAt.toString().slice(0, 16)}
            </td>
            <td data-label="Kedvezmény">{booking.discount}</td>
            <td>
              <NewWorksheetButton id={booking.id} />
            </td>
            <td>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <UpdateBooking id={booking.id} />
                  </div>
                  <div
                    className="col"
                    style={{
                      display: userId ? "block" : "none",
                    }}
                  >
                    <DeleteBooking id={booking.id} />
                  </div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
