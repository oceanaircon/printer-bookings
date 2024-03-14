"use client";
import { BookerField, PrinterField } from "@/app/lib/definitions";
import { createBooking } from "@/app/lib/actions";
import React, { useState } from "react";

export default function Form({
  bookers,
  printers,
  userId,
}: {
  bookers: BookerField[];
  printers: PrinterField[];
  userId: string;
}) {
  const initialPrinterSerial = printers.length > 0 ? printers[0].serial : "";
  const [selectedPrinterSerial, setSelectedPrinterSerial] =
    useState(initialPrinterSerial);

  const handlePrinterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPrinterId = event.target.value;
    const selectedPrinter = printers.find(
      (printer) => String(printer.id) === selectedPrinterId
    );
    if (selectedPrinter) {
      setSelectedPrinterSerial(selectedPrinter.serial);
    }
  };

  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const disableButton = () => {
    setButtonDisabled(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    createBooking(formData);
    disableButton();
  };

  return (
    <div className="container py-5 my-5 mx-auto text-center">
      <form
        onSubmit={handleSubmit}
        className="container mx-auto p-4 bg-white shadow-md rounded-md text-center"
        style={{
          maxWidth: "400px",
          margin: "auto",
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3 className="mb-4">Szerződés létrehozása</h3>
        <div className="mb-4">
          <div>
            <label
              htmlFor="booker"
              className="block text-sm font-medium text-gray-600 input-group justify-content-center"
            >
              Ügyfél
            </label>
          </div>
          <div>
            <select
              name="bookerId"
              id="booker"
              defaultValue=""
              className="input-group-text"
            >
              {bookers.map((booker) => (
                <option key={booker.id} value={booker.id}>
                  {booker.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div>
            <label
              htmlFor="printer"
              className="block text-sm font-medium text-gray-600"
            >
              Printer
            </label>
          </div>
          <div className="mb-4">
            <select
              name="printerId"
              id="printer"
              defaultValue=""
              className="input-group-text mb-4"
              onChange={handlePrinterChange}
            >
              {printers.map((printer) => (
                <option key={printer.id} value={printer.id}>
                  {printer.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {selectedPrinterSerial && (
          <p>
            {" "}
            <label
              htmlFor="discount"
              className="block text-sm font-medium text-gray-600"
            >
              Printer szériaszáma
            </label>
            <input
              type="text"
              name="serialNumber"
              id="serialNumber"
              className="input-group-text mb-2"
              value={selectedPrinterSerial}
            />
          </p>
        )}

        <div className="mb-4">
          <label
            htmlFor="discount"
            className="block text-sm font-medium text-gray-600"
          >
            Kedvezmény
          </label>
          <input
            type="number"
            name="discount"
            id="discount"
            className="input-group-text"
          />
        </div>
        <input type="hidden" name="userId" id="userId" value={userId} />
        <div className="mb-3 d-flex justify-content-between">
          <button
            disabled={isButtonDisabled}
            type="submit"
            value="Mehet"
            className="btn btn-outline-success"
          >
            Mehet
          </button>
          <a
            href="/bookings"
            type="button"
            className="btn btn-outline-danger"
            style={{ marginLeft: "10px" }}
          >
            Mégse
          </a>
        </div>
      </form>
    </div>
  );
}
