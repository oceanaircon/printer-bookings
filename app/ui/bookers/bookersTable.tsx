import React from "react";
import { UpdateBooker } from "../buttons";
import { DeleteBooker } from "../deletebuttons";
import { fetchFilteredBookers } from "../../lib/data";

export default async function BookersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const bookers = await fetchFilteredBookers(query, currentPage);

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Név</th>
              <th>Email</th>
              <th>Telefon</th>
              <th>Cím</th>
              <th>Adószám</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookers?.map((booker) => (
              <tr key={booker.id}>
                <th>{booker.id}</th>
                <th>{booker.name}</th>
                <td>{booker.email}</td>
                <td>{booker.phone}</td>
                <td>{booker.address}</td>
                <td>{booker.taxnumber}</td>
                <td>
                  <UpdateBooker id={booker.id} />
                  <DeleteBooker id={booker.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

