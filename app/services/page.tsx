import React from "react";
import prisma from "@/prisma/client";
import { DeleteService } from "../ui/deletebuttons";
import { UpdateService } from "../ui/buttons";
import { auth } from "@clerk/nextjs";

const ServicesPage = async () => {
  const services = await prisma.service.findMany();

  const { userId } = auth();

  return (
    <div className="my-4 py-5">
      <div className="table-responsive text-center">
        <h3>Services</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>
                {" "}
                <a
                  href="/services/new"
                  className=" btn btn-secondary btn-sm"
                  aria-current="page"
                >
                  New Service
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.name}</td>
                <td>
                  <div className="row container">
                    <div className="col-6">
                      <UpdateService id={service.id}></UpdateService>
                    </div>
                    <div
                      className="col-6"
                      style={{
                        display: userId ? "block" : "none",
                      }}
                    >
                      <DeleteService id={service.id} />
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
