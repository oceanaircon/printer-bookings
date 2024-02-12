import { BookerField } from "@/app/lib/definitions";
import { updateBooker } from "@/app/lib/actions";

export default function Form({ booker }: { booker: BookerField }) {
  const updateBookerWithId = updateBooker.bind(null, booker.id);

  return (
    <div className="container py-5 my-5 mx-auto text-center">
      <form
        className="container mx-auto p-4 bg-white shadow-md rounded-md text-center"
        action={updateBookerWithId}
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
        <h3 className="mb-4">Ügyfél szerkesztése</h3>

        <input type="hidden" name="id" value={booker.id} />
        <label htmlFor="name">Név</label>

        <input
          type="text"
          name="name"
          className="input-group-text mb-4"
          defaultValue={booker.name}
        />

        <label htmlFor="address">Cím</label>

        <input
          type="text"
          name="address"
          className="input-group-text mb-4"
          defaultValue={booker.address}
        />

        <label htmlFor="taxnumber">Adószám</label>

        <input
          type="text"
          name="taxnumber"
          className="input-group-text mb-4"
          defaultValue={booker.taxnumber}
        />

        <label htmlFor="phone">Telefon</label>

        <input
          type="text"
          name="phone"
          className="input-group-text mb-4"
          defaultValue={booker.phone}
        />

        <label htmlFor="email">Email</label>

        <input
          type="email"
          name="email"
          className="input-group-text mb-5"
          defaultValue={booker.email}
        />
        <div className="mb-3 d-flex justify-content-between">
          <input
            type="submit"
            value="Mehet"
            className="btn btn-outline-success"
          />
          <a
            href="/bookers"
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
