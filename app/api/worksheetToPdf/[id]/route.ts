import { fetchWorksheetByIdToPDF } from "@/app/lib/data";
import puppeteer from "puppeteer";
import chromium from "chrome-aws-lambda";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  const res = await fetchWorksheetByIdToPDF(id);
  const worksheet = await res;

  const value: string[] = Object.values(worksheet);

  const date1 = new Date(value[1]);
  const date2 = new Date(value[2]);

  const html = `
      <div><br>
        <ul>
          <li>
            Worksheet ID: ${id}
          </li><br />
          <li>
            Error Reporting Date: ${date1.toLocaleDateString("en-US")}
          </li><br />
          <li>
            Repair Deadline: ${date2.toLocaleDateString("en-US")}
          </li><br />
          <li>
            <b>Name: ${Object.values(Object.values(value[3])[0])[0]}</b>
          </li>
          <li>
            Email: ${Object.values(Object.values(value[3])[0])[1]}
          </li><br />
          <li>
            <b>Address: ${Object.values(Object.values(value[3])[0])[2]}</b>
          </li>
          <li>
            Phone: ${Object.values(Object.values(value[3])[0])[3]}
          </li><br />
          <li>
            <b>Printer: ${Object.values(Object.values(value[3])[1])[0]}</b>
          </li>
          <li>
            Serial: ${Object.values(Object.values(value[3])[1])[1]}
          </li><br />
          <li>
            <b>Service: ${Object.values(value[4])[0]}</b>
          </li><br />
          <li>
            Status: ${value[5]}
          </li>
        </ul>    
      </div>
    `;

  try {
    const browser = await chromium.puppeteer.launch({
      executablePath: await chromium.executablePath,
    });
    
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({ format: "A4" });
    await browser.close();

    return new NextResponse(pdf, {
      status: 200,
      headers: { "Content-Type": "application/pdf" },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}
