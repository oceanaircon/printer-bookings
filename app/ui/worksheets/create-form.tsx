import { BookingField, ServiceField } from "@/app/lib/definitions";
import { createWorksheet } from "@/app/lib/actions";

export default function Form({
  booking,
  services,
}: {
  booking: BookingField;
  services: ServiceField[];
}) {
  return (
    <form
      action={createWorksheet}
      className="text-center"
      style={{
        maxWidth: "400px",
        margin: "auto",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div>
        {/* Booking ID */}
        <div className="mb-2 py-4 my-3 input-group " style={{ width: "100%" }}>
          <label htmlFor="customer">Választott szerződés:</label>
          <div className="input-group">
            <select
              id="booking"
              name="bookingId"
              value={booking.id}
              className="input-group-text"
            >
              <option value={booking.id}>{booking.id}</option>
            </select>
          </div>
        </div>

        {/* Service ID */}
        <div className="mb-5 input-group">
          <label htmlFor="customer">Válassz hibát</label>
          <div className="input-group">
            <select id="service" name="serviceId" className="input-group-text">
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-small input-group">
            Állapot
          </legend>
          <div
            className="py-3 input-group mb-3"
            style={{
              maxWidth: "400px",
              margin: "auto",
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <div>
                <input
                  id="FOLYAMATBAN"
                  name="status"
                  type="radio"
                  value="FOLYAMATBAN"
                  checked
                  className="mb-3 h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 form-check-input mt-0"
                />
                <label
                  htmlFor="FOLYAMATBAN"
                  className="ml-2 flex cursor-pointer gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  FOLYAMATBAN {/*<ClockIcon className="h-4 w-4" />*/}
                </label>
              </div>
              <div>
                <input
                  id="BEFEJEZETT"
                  name="status"
                  type="radio"
                  value="BEFEJEZETT"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 form-check-input mt-0"
                />
                <label
                  htmlFor="BEFEJEZETT"
                  className="ml-2 flex cursor-pointergap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-black"
                >
                  BEFEJEZETT {/*<CheckIcon className="h-4 w-4" />*/}
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div>
        <button type="submit" className="btn btn-outline-success">
          Mehet
        </button>
      </div>
    </form>
  );
}
