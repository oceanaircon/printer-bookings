"use client";
import { createBooker } from "@/app/lib/actions";
import React, { useState } from "react";

export default function Form() {
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    taxnumber: "",
    phone: "",
    email: "",
  });

  const disableButton = () => {
    setButtonDisabled(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    createBooker(formData);
    disableButton();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    const isAnyFieldEmpty = Object.values(formData).some(
      (field) => field === ""
    );
    setButtonDisabled(isAnyFieldEmpty);

  };

  return (
    <div className="container py-5 my-5 mx-auto text-center">
      <form
        className="container mx-auto p-4 bg-white shadow-md rounded-md text-center"
        onSubmit={handleSubmit}
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
        <h3 className="mb-4">Add Booker</h3>
        <div className="mb-3">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="input-group-text w-full border"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="block text-sm font-medium">
            Address
          </label>
          <input
            type="text"
            name="address"
            className="input-group-text w-full border"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taxnumber" className="block text-sm font-medium">
            Tax Number
          </label>
          <input
            type="text"
            name="taxnumber"
            className="input-group-text w-full border"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className="input-group-text w-full border"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input-group-text w-full border mb-3"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3 d-flex justify-content-between">
          <button
            disabled={isButtonDisabled}
            type="submit"
            value="Mehet"
            className="btn btn-outline-success"
          >
            Submit
          </button>
          <a
            href="/bookers"
            type="button"
            className="btn btn-outline-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
