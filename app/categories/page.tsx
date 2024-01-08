import React from "react";
import Link from "next/link";
import prisma from "@/prisma/client";

const CategoriesPage = async () => {
  const categories = await prisma.category.findMany();

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
          {categories.map((category) => (
            <tr key={category.id}>
              <th>{category.name}</th>
              <td>{category.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesPage;
