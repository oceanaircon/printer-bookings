"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as Form from "@radix-ui/react-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface BookingForm {
  bookerId: number;
  printerId: number;
  discount: number;
  serviceId: number;
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
        <Form.Field {...register("bookerId")}>
          <Form.Label>Ügyfél ID</Form.Label>
          <Form.Control asChild>
            <input className="Input" type="number" required />
          </Form.Control>
        </Form.Field>
        <Form.Field {...register("printerId")}>
          <Form.Label>Printer ID</Form.Label>
          <Form.Control asChild>
            <input className="Input" type="number" required />
          </Form.Control>
        </Form.Field>
        <Form.Field {...register("discount")}>
          <Form.Label>Kedvezmény</Form.Label>
          <Form.Control asChild>
            <input className="Input" type="number" required />
          </Form.Control>
        </Form.Field>
        <Form.Field {...register("serviceId")}>
          <Form.Label>Karbantartás ID</Form.Label>
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
