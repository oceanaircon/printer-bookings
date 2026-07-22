import { fetchBookingById, loadBookers, loadPrinters } from "@/app/lib/data";
import Form from "@/app/ui/bookings/edit-form";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function UpdateBookingPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const booking = await fetchBookingById(id);
  const bookers = await loadBookers();
  const printers = await loadPrinters();
  const { userId } = await auth();

  if (!booking) {
    notFound();
  }

  return (
    <main>
      <Form
        booking={booking}
        bookers={bookers}
        printers={printers}
        userId={userId!}
      />
    </main>
  );
}
