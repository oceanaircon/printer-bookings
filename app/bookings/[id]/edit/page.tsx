import { fetchBookingById, loadBookers, loadPrinters } from "@/app/lib/data";
import Form from "@/app/ui/bookings/edit-form";
import { notFound } from "next/navigation";

export default async function UpdateBookingPage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;
  const booking = await fetchBookingById(id);
  const bookers = await loadBookers();
  const printers = await loadPrinters();

  if (!booking) {
    notFound();
  }

  return (
    <main>
      <Form booking={booking} bookers={bookers} printers={printers} />
    </main>
  );
}