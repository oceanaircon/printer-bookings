import React from "react";
import prisma from "../prisma/client";

const SelectCategory = async () => {
  const categories = await prisma.category.findMany();

  return (
    <div>
      <select>
        {categories.map((category) => (
          <option value="name" key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;
