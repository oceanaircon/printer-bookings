"use client";
import { createCategory } from "@/app/lib/actions";
import React, { useState } from "react";

export default function Form() {
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
  });

  const disableButton = () => {
    setButtonDisabled(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    createCategory(formData);
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
        action={createCategory}
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
        <h3 className="mb-5">Kategória létrehozása</h3>
        <div>
          <label htmlFor="name">Név</label>
        </div>
        <div>
          <input
            type="text"
            name="name"
            className="input-group-text mb-4"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="fee">Díj</label>
        </div>
        <div className="mb-5">
          <input
            type="number"
            name="fee"
            className="input-group-text text-center justify-center"
          />
        </div>
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
            href="/categories"
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
