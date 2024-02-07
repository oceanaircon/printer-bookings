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
    <div className="container mx-auto text-center">
      <form
        className="py-4 my-5"
        action={createBooking}
        style={{
          maxWidth: "400px",
          margin: "auto",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="input-group">
          <label htmlFor="booker" className="form-label">
            Ügyfél
          </label>
        </div>
        <div className="mb-4 input-group">
          <select
            name="bookerId"
            id="booker"
            defaultValue=""
            className="input-group-text col-7"
          >
            {bookers.map((booker) => (
              <option key={booker.id} value={booker.id}>
                {booker.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="printer" className="mb-2 block text-sm font-medium">
            Printer
          </label>
        </div>
        <div className="input-group mb-5 ">
          <select
            name="printerId"
            id="printer"
            defaultValue=""
            className="input-group-text col-7"
          >
            {printers.map((printer) => (
              <option key={printer.id} value={printer.id}>
                {printer.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="discount">Kedvezmény:</label>
        </div>
        <div className="input-group mb-4">
          <input
            type="number"
            name="discount"
            className="input-group-text col-7"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-outline-success ">
            Mehet
          </button>
        </div>
      </form>
    </div>
  );
}
