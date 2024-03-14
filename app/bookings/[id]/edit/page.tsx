import { fetchBookingById, loadBookers, loadPrinters } from "@/app/lib/data";
import Form from "@/app/ui/bookings/edit-form";
import { auth } from "@clerk/nextjs";
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
  const { userId } = auth() as any;

  if (!booking) {
    notFound();
  }

  return (
    <main>
      <Form
        booking={booking}
        bookers={bookers}
        printers={printers}
        userId={userId}
      />
    </main>
  );
}
