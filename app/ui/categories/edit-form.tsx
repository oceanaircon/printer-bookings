import { CategoryField } from "@/app/lib/definitions";
import { updateCategory } from "@/app/lib/actions";

export default function Form({ category }: { category: CategoryField }) {
  const updateCategoryWithId = updateCategory.bind(null, category.id);

  return (
    <div className="container py-5 my-5 mx-auto text-center">
      <form
        className="container mx-auto p-4 bg-white shadow-md rounded-md text-center"
        action={updateCategoryWithId}
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
        <h3 className="mb-5">Kategória szerkesztése</h3>
        <input type="hidden" name="id" value={category.id} />
        <div>
          <label htmlFor="name">Név</label>
        </div>
        <div>
          <input
            type="text"
            name="name"
            defaultValue={category.name}
            className="input-group-text mb-4"
          />
        </div>
        <div>
          <label htmlFor="address">Díj:</label>
        </div>
        <div className="mb-5">
          <input
            type="number"
            name="fee"
            defaultValue={category.fee}
            className="input-group-text text-center justify-center"
          />
        </div>
        <div className="mb-3 d-flex justify-content-between">
            <input
              type="submit"
              value="Mehet"
              className="btn btn-outline-success"
            />
            <a
              href="/categories"
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
