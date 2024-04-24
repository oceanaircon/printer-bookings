import {
  BookerField,
  UpdateBookingField,
  PrinterField,
} from "@/app/lib/definitions";
import { updateBooking } from "@/app/lib/actions";

export default function Form({
  booking,
  bookers,
  printers,
  userId,
}: {
  booking: UpdateBookingField;
  bookers: BookerField[];
  printers: PrinterField[];
  userId: string;
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
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3>Szerződés szerkesztése</h3>
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

          <div>
            <label htmlFor="createdAt">Start:</label>
          </div>
          <div>
            <input
              type="datetime"
              name="createdAt"
              className="input-group-text mb-3 col-12"
              defaultValue={booking.createdAt}
            ></input>
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
              id="discount"
              defaultValue={booking.discount}
              className="input-group-text col-12"
            />
          </div>
          <input type="hidden" name="userId" id="userId" value={userId} />
          <div className="mb-3 justify-content-between">
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
