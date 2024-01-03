"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as Form from "@radix-ui/react-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface BookingForm {
  bookerName: string;
  bookerEmail: string;
  categoryName: string;
  categoryFee: number;
  printerId: number;
  discount: number;
}

const NewBookingPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<BookingForm>();

  return (
    <div className="container">
      <h1>Új bérlet létrehozása</h1>
      <Form.Root
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/bookings", data);
            router.push("/bookings");
          } catch (error) {
            console.log(error);
          }
        })}
      >
        <h2>Ügyfél adatai</h2>
        <Form.Field {...register("bookerName")}>
          <Form.Label>Ügyfél név</Form.Label>
          <Form.Control asChild>
            <input className="Input" type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field {...register("bookerEmail")}>
          <Form.Label>Ügyfél email</Form.Label>
          <Form.Control asChild>
            <input className="Input" type="text" required />
          </Form.Control>
        </Form.Field>
        <h2>Kategória adatai</h2>
        <Form.Field {...register("categoryName")}>
          <Form.Label>Kategória neve</Form.Label>
          <Form.Control asChild>
            <input className="Input" type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field {...register("categoryFee", { valueAsNumber: true })}>
          <Form.Label>Kategória díj</Form.Label>
          <Form.Control asChild>
            <input className="Input" type="number" required />
          </Form.Control>
        </Form.Field>
        <Form.Field {...register("printerId", { valueAsNumber: true })}>
          <Form.Label>Printer ID</Form.Label>
          <Form.Control asChild>
            <input className="Input" type="number" required />
          </Form.Control>
        </Form.Field>
        <Form.Field {...register("discount", { valueAsNumber: true })}>
          <Form.Label>Kedvezmény</Form.Label>
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

export default NewBookingPage;
