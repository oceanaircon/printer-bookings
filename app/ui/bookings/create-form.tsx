import { BookerField, PrinterField } from "@/app/lib/definitions";
import { createBooking } from "@/app/lib/actions";

export default function Form({
  bookers,
  printers,
}: {
  bookers: BookerField[];
  printers: PrinterField[];
}) {
  return (
    <div className="container py-5 my-5 mx-auto text-center">
      <form
        className="container mx-auto p-4 bg-white shadow-md rounded-md text-center"
        action={createBooking}
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
              htmlFor="bookerId"
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
              htmlFor="printerId"
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
            >
              {printers.map((printer) => (
                <option key={printer.id} value={printer.id}>
                  {printer.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="discount"
            className="block text-sm font-medium text-gray-600"
          >
            Kedvezmény
          </label>
          <input type="number" name="discount" className="input-group-text" />
        </div>
        <div className="mb-3 d-flex justify-content-between">
          <input
            type="submit"
            value="Mehet"
            className="btn btn-outline-success"
          />
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
