"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as Form from "@radix-ui/react-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import SelectCategory from "../../SelectCategory";

interface PrinterForm {
  printerCategory: string;
  printerSerial: string;
  printerName: string;
  printerDescription: string;
  printerBusy: boolean;
}

const NewPrinterPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<PrinterForm>();

  return (
    <div className="container">
      <h1>Új printer létrehozása</h1>
      <Form.Root
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/printers", data);
            router.push("/printers");
          } catch (error) {
            console.log(error);
          }
        })}
      >
        <Form.Field {...register("printerCategory")}>
          <Form.Label>Kategória</Form.Label>
          <Form.Control asChild>
            <SelectCategory></SelectCategory>
          </Form.Control>
        </Form.Field>
        <Form.Field {...register("printerSerial")}>
          <Form.Label>Cikkszám</Form.Label>
          <Form.Control asChild>
            <input className="Input" type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field {...register("printerName")}>
          <Form.Label>Printer ID</Form.Label>
          <Form.Control asChild>
            <input className="Input" type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field {...register("printerDescription")}>
          <Form.Label>Kedvezmény</Form.Label>
          <Form.Control asChild>
            <input className="Input" type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field {...register("printerBusy")}>
          <Form.Label>Karbantartás ID</Form.Label>
          <Form.Control asChild>
            <input className="Input" type="checkbox" required />
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

export default NewPrinterPage;
