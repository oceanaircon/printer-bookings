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
    <form
      className="container mx-auto p-4 bg-white shadow-md rounded-md text-center"
      action={updateBookingWithId}
      style={{
        maxWidth: "400px",
      }}
    >
      <div className="mb-4">
        <label htmlFor="booker" className="block text-sm font-medium text-gray-600">
          Ügyfél:
        </label>
        <select
          name="bookerId"
          id="booker"
          defaultValue={booking.bookerId}
          className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          {bookers.map((booker) => (
            <option key={booker.id} value={booker.id}>
              {booker.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="printer" className="block text-sm font-medium text-gray-600">
          Printer:
        </label>
        <select
          name="printerId"
          id="printer"
          defaultValue={booking.printerId}
          className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          {printers.map((printer) => (
            <option key={printer.id} value={printer.id}>
              {printer.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="discount" className="block text-sm font-medium text-gray-600">
          Kedvezmény:
        </label>
        <input
          type="number"
          name="discount"
          defaultValue={booking.discount}
          className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
        >
          Mehet
        </button>
      </div>
    </form>
  );
}