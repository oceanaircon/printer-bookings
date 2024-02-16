import React from "react";
import prisma from "@/prisma/client";
import { DeleteService } from "../ui/deletebuttons";
import { UpdateService } from "../ui/buttons";

const ServicesPage = async () => {
  const services = await prisma.service.findMany();

  return (
    <div className="my-4 py-5">
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
                  <div className="row container">
                    <div className="col-6">
                      <UpdateService id={service.id}></UpdateService>
                    </div>
                    <div className="col-6">
                      <DeleteService id={service.id}></DeleteService>
                    </div>
                  </div>
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
