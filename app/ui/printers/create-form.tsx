import { CategoryField } from "@/app/lib/definitions";
import { createPrinter } from "@/app/lib/actions";

export default function Form({ categories }: { categories: CategoryField[] }) {
  return (
    <div className="container py-5 my-5 mx-auto text-center">
      <form
        action={createPrinter}
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
        <h3 className="mb-4">Printer létrehozása</h3>

        <div className="mb-3 justify-center">
          <div>
            <label
              htmlFor="category"
              className="justify-content-center text-center"
            >
              Kategória
            </label>
          </div>
          <div>
            <select
              name="categoryId"
              id="category"
              className="input-group-text mb-3 justify-content-center"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="serial" className="form-label">
              Serial
            </label>
          </div>
          <div>
            <input
              type="text"
              name="serial"
              className="input-group-text mb-3"
            />
          </div>
        </div>

        <div className="mb-3">
          <div>
            <label htmlFor="name" className="form-label">
              Név
            </label>
          </div>
          <div>
            <input type="text" name="name" className="input-group-text" />
          </div>
        </div>

        <div className="mb-3">
          <div>
            <label htmlFor="description" className="form-label">
              Leírás
            </label>
          </div>
          <div>
            <input
              type="text"
              name="description"
              className="input-group-text"
            />
          </div>
        </div>

        <fieldset>
          <div>
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
                  defaultChecked={true}
                  className="form-check-input"
                />
                <label htmlFor="available" className="form-check-label ">
                  Szabad
                </label>
              </div>

              <div className="form-check">
                <input
                  id="leased"
                  name="status"
                  type="radio"
                  value="FOGLALT"
                  className="form-check-input"
                />
                <label htmlFor="leased" className="form-check-label ml-2 ">
                  Foglalt
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div>
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
        </div>
      </form>
    </div>
  );
}
