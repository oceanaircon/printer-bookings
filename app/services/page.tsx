import React from "react";
import Link from "next/link";
import prisma from "@/prisma/client";
import { DeleteService } from "../ui/deletebuttons";
import { UpdateService } from "../ui/buttons";

const ServicesPage = async () => {
  const services = await prisma.service.findMany();

  return (
    <div className="my-3 py-5">
      <div className="table-responsive text-center">
      <h3>Hibák</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Hiba neve</th>
              <th>
                {" "}
                <a
                  href="/services/new"
                  className=" btn btn-secondary btn-sm"
                  aria-current="page"
                >
                  Új hiba
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <th>{service.id}</th>
                <td>{service.name}</td>
                <td>
                  <UpdateService id={service.id}></UpdateService>
                  <DeleteService id={service.id}></DeleteService>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesPage;
