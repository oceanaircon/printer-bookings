import Link from "next/link";
import { deleteBooker } from "../lib/actions";

export function NewWorksheetButton({ id }: { id: number }) {
  return <Link href={`/worksheets/${id}/new`}>Új munkalap</Link>;
}

export function UpdateBooker({ id }: { id: number }) {
  return <Link href={`/bookers/${id}/edit`}>Szerkesztés</Link>;
}

export function DeleteBooker({ id }: { id: number }) {
  const deleteBookerWithId = deleteBooker.bind(null, id);

  return (
    <form action={deleteBookerWithId}>
      <button className="rounded-md border p-1 hover:bg-gray-100">
        <span>Törlés</span>
      </button>
    </form>
  );
}

export function UpdatePrinter({ id }: { id: number }) {
  return <Link href={`/printers/${id}/edit`}>Szerkesztés</Link>;
}

export function DeletePrinter({ id }: { id: number }) {
  return <Link href={`/printers/${id}/delete`}>Törlés</Link>;
}

export function UpdateBooking({ id }: { id: number }) {
  return <Link href={`/bookings/${id}/edit`}>Szerkesztés</Link>;
}

export function DeleteBooking({ id }: { id: number }) {
  return <Link href={`/bookings/${id}/delete`}>Törlés</Link>;
}

export function UpdateWorksheet({ id }: { id: number }) {
  return <Link href={`/worksheets/${id}/edit`}>Szerkesztés</Link>;
}

export function DeleteWorksheet({ id }: { id: number }) {
  return <Link href={`/worksheets/${id}/delete`}>Törlés</Link>;
}
