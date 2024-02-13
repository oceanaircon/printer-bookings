import { CategoryField, PrinterField } from "@/app/lib/definitions";
import { updatePrinter } from "@/app/lib/actions";

export default function Form({
  printer,
  categories,
}: {
  printer: PrinterField;
  categories: CategoryField[];
}) {
  const updatePrinterWithId = updatePrinter.bind(null, printer.id);

  return (
    <div className="py-5 my-5">
      <form
        action={updatePrinterWithId}
        className="container mx-auto bg-white shadow-md rounded-md text-center "
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
        <h3 className="mb-4">Printer szerkesztése</h3>
        <div>
          <label htmlFor="category" className="block text-sm font-medium">
            Kategória
          </label>
        </div>
        <div className="mb-3">
          <select
            name="categoryId"
            id="category"
            className="input-group-text"
            defaultValue={printer.categoryId}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="serial" className="form-label">
            Serial
          </label>
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="serial"
            id="serial"
            className="input-group-text"
            defaultValue={printer.serial}
          />
        </div>
        <div>
          <label htmlFor="name" className="form-label">
            Név
          </label>
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            id="name"
            className="input-group-text"
            defaultValue={printer.name}
          />
        </div>
        <div>
          <label htmlFor="description" className="form-label">
            Leírás
          </label>
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="description"
            id="description"
            defaultValue={printer.description}
            className="input-group-text mb-3"
          />
        </div>
        <div>
          <fieldset>
            <legend className="form-label">Printer állapota</legend>
            <div
              className="py-3 input-group-text mb-3"
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
                  id="available"
                  name="status"
                  type="radio"
                  value="SZABAD"
                  className="form-check-input"
                  defaultChecked={printer.status === "SZABAD"}
                />
                <label htmlFor="available">Szabad</label>
              </div>
              <div className="form-check">
                <input
                  id="leased"
                  name="status"
                  type="radio"
                  value="FOGLALT"
                  className="form-check-input"
                  defaultChecked={printer.status === "FOGLALT"}
                />
                <label htmlFor="leased">Foglalt</label>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="mb-3 d-flex justify-content-between">
          <input
            type="submit"
            value="Mehet"
            className="btn btn-outline-success"
          />
          <a
            href="/printers"
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
