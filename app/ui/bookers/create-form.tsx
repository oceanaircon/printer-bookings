import { createBooker } from "@/app/lib/actions";

export default function Form() {
  return (
    <div className="container py-5 my-5 mx-auto text-center">
      <form
        className="container mx-auto p-4 bg-white shadow-md rounded-md text-center"
        action={createBooker}
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
        <h3 className="mb-4">Ügyfél létrehozása</h3>
        <div className="mb-3">
          <label htmlFor="name" className="block text-sm font-medium">
            Név
          </label>
          <input
            type="text"
            name="name"
            className="input-group-text w-full border"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="block text-sm font-medium">
            Cím
          </label>
          <input
            type="text"
            name="address"
            className="input-group-text w-full border"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taxnumber" className="block text-sm font-medium">
            Adószám
          </label>
          <input
            type="text"
            name="taxnumber"
            className="input-group-text w-full border"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="block text-sm font-medium">
            Telefon
          </label>
          <input
            type="text"
            name="phone"
            className="input-group-text w-full border"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input-group-text w-full border mb-3"
          />
        </div>
        <div className="mb-3 text-center">
          <input
            type="submit"
            value="Mehet"
            className="btn btn-outline-success w-full"
          />
        </div>
      </form>
    </div>
  );
}
