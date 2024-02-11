import { BookerField, BookingField, PrinterField } from "@/app/lib/definitions";
import { updateBooking } from "@/app/lib/actions";

export default function Form({
  booking,
  bookers,
  printers,
}: {
  booking: BookingField;
  bookers: BookerField[];
  printers: PrinterField[];
}) {
  const updateBookingWithId = updateBooking.bind(null, booking.id);

  return (
    <div className="container py-5 my-5 mx-auto text-center">
      <form
        className="container mx-auto p-4 bg-white shadow-md rounded-md text-center"
        action={updateBookingWithId}
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
        <h3>Ügyfél szerkesztése</h3>
        <div className="py-4 justify-content-center">
          <div className="mb-4">
            <div>
              <label
                htmlFor="booker"
                className="block text-sm font-medium text-gray-600"
              >
                Ügyfél
              </label>
            </div>
            <div>
              <select
                name="bookerId"
                id="booker"
                defaultValue={booking.bookerId}
                className="input-group-text col-12"
              >
                {bookers.map((booker) => (
                  <option key={booker.id} value={booker.id}>
                    {booker.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label
                htmlFor="printer"
                className="block text-sm font-medium text-gray-600"
              >
                Printer
              </label>
            </div>
            <select
              name="printerId"
              id="printer"
              defaultValue={booking.printerId}
              className="input-group-text col-12"
            >
              {printers.map((printer) => (
                <option key={printer.id} value={printer.id}>
                  {printer.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="discount"
              className="block text-sm font-medium text-gray-600"
            >
              Kedvezmény:
            </label>
            <input
              type="number"
              name="discount"
              defaultValue={booking.discount}
              className="input-group-text"
            />
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
        </div>
      </form>
    </div>
  );
}
