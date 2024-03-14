import Form from "@/app/ui/bookings/create-form";
import { loadBookers, loadPrinters } from "@/app/lib/data";
import { auth } from "@clerk/nextjs";

export default async function NewBookingPage() {
  const bookers = await loadBookers();
  const printers = await loadPrinters();

  const { userId } = auth() as any;

  return (
    <main>
      <Form bookers={bookers} printers={printers} userId={userId} />
    </main>
  );
}
