import React from "react";
import Link from "next/link";
import prisma from "@/prisma/client";

const CategoriesPage = async () => {
  const bookers = await prisma.category.findMany();

  return (
    <div>
      <Link href="/categories/new">
        <p>Új kategória</p>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>Díj</th>
          </tr>
        </thead>
        <tbody>
          {bookers.map((booker) => (
            <tr key={booker.id}>
              <th>{booker.name}</th>
              <td>{booker.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesPage;
