import React from "react";
import { UpdateBooker } from "../buttons";
import { DeleteBooker } from "../deletebuttons";
import { fetchFilteredBookers } from "../../lib/data";
import '../custom.scss'

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
            <th>Név</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Cím</th>
            <th>Adószám</th>
            <th>
              <a
                href="/bookers/new"
                className=" btn btn-secondary btn-sm"
                aria-current="page"
              >
                Új ügyfél
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
                <div>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <UpdateBooker id={booker.id}></UpdateBooker>
                    </div>
                    <div className="col-6">
                      <DeleteBooker id={booker.id}></DeleteBooker>
                    </div>
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
