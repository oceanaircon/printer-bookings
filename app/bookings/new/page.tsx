import Form from "@/app/ui/bookings/create-form";
import { getCurrentUserId, loadBookers, loadPrinters } from "@/app/lib/data";
import { auth, currentUser } from "@clerk/nextjs";

export default async function NewBookingPage() {
  const bookers = await loadBookers();
  const printers = await loadPrinters();

  const { userId } = auth();

  return (
    <main>
      <Form bookers={bookers} printers={printers} userid={4} />
      <h3>{userId}</h3>
    </main>
  );
}
