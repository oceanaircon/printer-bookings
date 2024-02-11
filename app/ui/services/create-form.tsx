import { createService } from "@/app/lib/actions";

export default function Form() {
  return (
    <div className="container py-5 my-5 mx-auto text-center">
      <form
        action={createService}
        className="py-4 my-5"
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
        <h3 className="mb-5">Hiba létrehozása</h3>
        <div className="justify-content-center text-center">
          <label htmlFor="name">Hiba leírása</label>
        </div>
        <div className="input-group mb-5 justify-content-center text-center">
          <input type="text" name="name" className="input-group-text" />
        </div>
        <div className="mb-3 d-flex justify-content-between">
          <input
            type="submit"
            value="Mehet"
            className="btn btn-outline-success"
          />
          <a
            href="/services"
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
