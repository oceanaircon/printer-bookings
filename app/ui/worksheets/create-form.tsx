"use client";
import { BookingField, ServiceField } from "@/app/lib/definitions";
import { createWorksheet } from "@/app/lib/actions";
import React, { useState } from "react";

export default function Form({
  booking,
  services,
  userId,
}: {
  booking: BookingField;
  services: ServiceField[];
  userId: string;
}) {
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const disableButton = () => {
    setButtonDisabled(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    createWorksheet(formData)
    disableButton();
  }

  return (
    <div className="container py-5 my-5 mx-auto text-center">
      <form
      onSubmit={handleSubmit}
        className="container mx-auto bg-white shadow-md rounded-md text-center "
        style={{
          maxWidth: "400px",
          margin: "auto",
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3 className="mb-4">Új munkalap</h3>
        <div className="justify-content-center">
          {/* Booking ID */}
          <div className="mb-4">
            <label htmlFor="customer">Választott szerződés</label>
            <select
              id="booking"
              name="bookingId"
              value={booking.id}
              className="form-control col-3"
              style={{ textAlign: "center" }}
            >
              <option value={booking.id}>{booking.id}</option>
            </select>
          </div>

          {/* Service ID */}
          <div className="mb-4">
            <label htmlFor="customer">Válassz hibát</label>
            <div className="input-group">
              <select
                id="service"
                name="serviceId"
                className="input-group-text col-12"
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Status */}
          <fieldset>
            <div className="input-group ">
              <legend>Állapot</legend>
            </div>
            <div
              className="py-3 input-group-text mb-3"
              style={{
                maxWidth: "300px",
                margin: "auto",
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <div>
                  <input
                    id="FOLYAMATBAN"
                    name="status"
                    type="radio"
                    value="FOLYAMATBAN"
                    checked
                    className="mb-3 h-3 w-3 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 form-check-input mt-0"
                  />
                  <label
                    htmlFor="FOLYAMATBAN"
                    className="ml-2 flex cursor-pointer gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    FOLYAMATBAN {/*<ClockIcon className="h-4 w-4" />*/}
                  </label>
                </div>
                <div>
                  <input
                    id="BEFEJEZETT"
                    name="status"
                    type="radio"
                    value="BEFEJEZETT"
                    className="h-3 w-3 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 form-check-input mt-0"
                  />
                  <label
                    htmlFor="BEFEJEZETT"
                    className="ml-2 flex cursor-pointergap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-black"
                  >
                    BEFEJEZETT {/*<CheckIcon className="h-4 w-4" />*/}
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
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
