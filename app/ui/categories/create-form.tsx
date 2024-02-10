import { createCategory } from "@/app/lib/actions";

export default function Form() {
  return (
    <div className="container py-5 my-5 mx-auto text-center">
      <form
        className="container mx-auto p-4 bg-white shadow-md rounded-md text-center"
        action={createCategory}
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
        <h3 className="mb-5">Kategória létrehozása</h3>
        <div>
          <label htmlFor="name">Név</label>
        </div>
        <div>
          <input type="text" name="name" className="input-group-text mb-4" />
        </div>
        <div>
          <label htmlFor="fee">Díj</label>
        </div>
        <div className="mb-5">
          <input
            type="number"
            name="fee"
            className="input-group-text text-center justify-center"
          />
        </div>
        <button type="submit" className="btn btn-outline-success">
          Mehet
        </button>
      </form>
    </div>
  );
}
