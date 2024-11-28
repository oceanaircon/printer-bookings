import React from "react";
import { UpdateBooker } from "../buttons";
import { fetchFilteredBookers } from "../../lib/data";
import "../custom.scss";

export default async function BookersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const bookers = await fetchFilteredBookers(query, currentPage);

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Tax Number</th>
            <th>
              <a
                href="/bookers/new"
                className=" btn btn-secondary btn-sm"
                aria-current="page"
              >
                New Booker
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          {bookers?.map((booker) => (
            <tr key={booker.id}>
              <td data-label="ID">{booker.id}</td>
              <td data-label="Név">{booker.name}</td>
              <td data-label="Email">{booker.email}</td>
              <td data-label="Telefon">{booker.phone}</td>
              <td data-label="Cím">{booker.address}</td>
              <td data-label="Adószám">{booker.taxnumber}</td>
              <td>
                <UpdateBooker id={booker.id}></UpdateBooker>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
