import { createBooker } from "@/app/lib/actions";

export default function Form() {
  return (
    <div className="container mx-auto">
      <form
        className="py-4 my-5"
        action={createBooker}
        style={{
          maxWidth: "400px",
          margin: "auto",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="block text-sm font-medium">
            Név:
          </label>
          <input
            type="text"
            name="name"
            className="input-group-text w-full border"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="block text-sm font-medium">
            Cím:
          </label>
          <input
            type="text"
            name="address"
            className="input-group-text w-full border"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taxnumber" className="block text-sm font-medium">
            Adószám:
          </label>
          <input
            type="text"
            name="taxnumber"
            className="input-group-text w-full border"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="block text-sm font-medium">
            Telefon:
          </label>
          <input
            type="text"
            name="phone"
            className="input-group-text w-full border"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-sm font-medium">
            Email:
          </label>
          <input
            type="email"
            name="email"
            className="input-group-text w-full border"
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
