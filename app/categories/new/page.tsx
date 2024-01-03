"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as Form from "@radix-ui/react-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface CategoryForm {
  name: string;
  fee: number;
}

const NewCategoryPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<CategoryForm>();

  return (
    <div className="container">
      <h1>Új kategória létrehozása</h1>
      <Form.Root
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/categories", data);
            router.push("/categories");
          } catch (error) {
            console.log(error);
          }
        })}
      >
        <Form.Field {...register("name")}>
          <Form.Label>Név</Form.Label>
          <Form.Control asChild>
            <input className="Input" type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field {...register("fee", { valueAsNumber: true })}>
          <Form.Label>Díj</Form.Label>
          <Form.Control asChild>
            <input className="Input" type="number" required />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="Button" style={{ marginTop: 10 }}>
            Mehet
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default NewCategoryPage;
