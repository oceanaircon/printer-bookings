import { ServiceField, UpdateWorksheetField } from "@/app/lib/definitions";
import { updateWorksheet } from "@/app/lib/actions";

export default function Form({
  worksheet,
  services,
  userId,
}: {
  worksheet: UpdateWorksheetField;
  services: ServiceField[];
  userId: string;
}) {
  const updateWorksheetById = updateWorksheet.bind(null, worksheet.id);

  return (
    <div className="container py-5 my-5 mx-auto text-center">
      <form
        action={updateWorksheetById}
        className="container mx-auto bg-white shadow-md rounded-md text-center"
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
        <h3 className="mb-4">Munkalap szerkesztése</h3>
        <div className="mb-3 justify-center">
          {/* Booking ID */}
          <div className="mb-4">
            <label
              htmlFor="customer"
              className="justify-content-center text-center"
            >
              Választott szerződés:
            </label>
            <div>
              <select
                id="booking"
                name="bookingId"
                className="form-control text-center"
              >
                <option value={worksheet.bookingId}>
                  {worksheet.bookingId}
                </option>
              </select>
            </div>
          </div>

          {/* Service ID */}
          <div className="mb-4">
            <label htmlFor="customer">Válassz hibát</label>
            <div className="input-group">
              <select
                id="service"
                name="serviceId"
                className="input-group-text"
                defaultValue={worksheet.serviceId}
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="repairDeadline">Határidő:</label>
          </div>
          <div>
            <input
              type="datetime"
              name="repairDeadline"
              className="input-group-text mb-3"
              defaultValue={worksheet.repairDeadline}
            ></input>
          </div>

          {/* Status */}
          <fieldset>
            <div>
              <legend className="form-label">Állapot</legend>
              <div
                className="py-3 input-group-text mb-2"
                style={{
                  maxWidth: "400px",
                  margin: "auto",
                  background: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="form-check">
                  <input
                    id="FOLYAMATBAN"
                    name="status"
                    type="radio"
                    value="FOLYAMATBAN"
                    className="form-check-input"
                    defaultChecked={worksheet.status === "FOLYAMATBAN"}
                  />
                  <label htmlFor="FOLYAMATBAN" className="form-check-label">
                    FOLYAMATBAN {/*<ClockIcon className="h-4 w-4" />*/}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="BEFEJEZETT"
                    name="status"
                    type="radio"
                    value="BEFEJEZETT"
                    className="form-check-input"
                    defaultChecked={worksheet.status === "BEFEJEZETT"}
                  />
                  <label htmlFor="BEFEJEZETT" className="form-check-label ml-2">
                    BEFEJEZETT {/*<CheckIcon className="h-4 w-4" />*/}
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <input type="hidden" name="userId" value={userId} />
        <div className="mb-3 d-flex justify-content-between">
          <input
            type="submit"
            value="Mehet"
            className="btn btn-outline-success"
          />
          <a
            href="/worksheets"
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
