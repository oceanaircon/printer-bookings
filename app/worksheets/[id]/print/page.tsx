import { fetchWorksheetByIdToPDF } from "@/app/lib/data";
import React from "react";
import PrintPage from "@/app/ui/PrintPage";

async function Print({ params }: { params: { id: number } }) {
  const id = params.id;
  const res = await fetchWorksheetByIdToPDF(id);
  const worksheet = await res;

  const value: string[] = Object.values(worksheet);

  const date1 = new Date(value[1]);
  const date2 = new Date(value[2]);

  return (
    <div>
      <br />
      <br />
      <br />
      <div>
        <br />
        <ul>
          <h6>
            <PrintPage />
          </h6>
          <br />
          <li>Worksheet ID: {id}</li>
          <br />
          <li>Error Reporting Date: {date1.toLocaleDateString("hu-HU")}</li>
          <br />
          <li>Repair Deadline: {date2.toLocaleDateString("hu-HU")}</li>
          <br />
          <li>
            <b>Name: {Object.values(Object.values(value[3])[0])[0]}</b>
          </li>
          <li>Email: {Object.values(Object.values(value[3])[0])[1]}</li>
          <br />
          <li>
            <b>Address: {Object.values(Object.values(value[3])[0])[2]}</b>
          </li>
          <li>Phone: {Object.values(Object.values(value[3])[0])[3]}</li>
          <br />
          <li>
            <b>Printer: {Object.values(Object.values(value[3])[1])[0]}</b>
          </li>
          <li>Serial: {Object.values(Object.values(value[3])[1])[1]}</li>
          <br />
          <li>
            <b>Service: {Object.values(value[4])[0]}</b>
          </li>
          <br />
          <li>Status: {value[5]}</li>
        </ul>
      </div>
    </div>
  );
}

export default Print;
