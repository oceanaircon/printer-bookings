import React from "react";
import prisma from "@/prisma/client";
import { UpdateCategory } from "../ui/buttons";

const CategoriesPage = async () => {
  const categories = await prisma.category.findMany();

  return (
    <div className="my-4 py-5">
      <div className="table-responsive text-center">
        <h3>Categories</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>
                <a
                  href="/categories/new"
                  className=" btn btn-secondary btn-sm"
                  aria-current="page"
                >
                  New Category
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <th>{category.id}</th>
                <th>{category.name}</th>
                <td>{category.fee}</td>
                <td>
                  <UpdateCategory id={category.id}></UpdateCategory>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriesPage;
