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
    <div style={{ margin: "3rem" }}>

      <div>
        <br />
        <table>
          <tbody>
            <tr>
              <th>Munkalap azonosító:</th>
              <td>{id}</td>
            </tr>
            <tr>
              <th>Hiba bejelentés dátuma:</th>
              <td>{date1.toLocaleDateString("hu-HU")}</td>
            </tr>
            <tr>
              <th>Javítási határidő:</th>
              <td>{date2.toLocaleDateString("hu-HU")}</td>
            </tr>
            <tr>
              <th>Név:</th>
              <td><b>{Object.values(Object.values(value[3])[0])[0]}</b></td>
            </tr>
            <tr>
              <th>Email cím:</th>
              <td>{Object.values(Object.values(value[3])[0])[1]}</td>
            </tr>
            <tr>
              <th>Cím:</th>
              <td><b>{Object.values(Object.values(value[3])[0])[2]}</b></td>
            </tr>
            <tr>
              <th>Telefonszám:</th>
              <td>{Object.values(Object.values(value[3])[0])[3]}</td>
            </tr>
            <tr>
              <th>Nyomtató típusa:</th>
              <td><b>{Object.values(Object.values(value[3])[1])[0]}</b></td>
            </tr>
            <tr>
              <th>Szériaszám:</th>
              <td>{Object.values(Object.values(value[3])[1])[1]}</td>
            </tr>
            <tr>
              <th>Szerviz:</th>
              <td><b>{Object.values(value[4])[0]}</b></td>
            </tr>
            <tr>
              <th></th>
            </tr>
            <tr>
              <th>Ügyfél aláírása:</th>
              <td>_____________________</td>
            </tr>
            <tr>
              <th></th>
            </tr>
            <tr>
              <th>Szerviz aláírása:</th>
              <td>_____________________</td>
            </tr>
            <tr>
              <th></th>
            </tr>
            <tr>
              <th>Dátum:</th>
              <td>_____________________</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <h6><PrintPage /></h6>
    </div>
  );
}

export default Print;
