import Form from "@/app/ui/bookings/create-form";
import { loadBookers, loadPrinters } from "@/app/lib/data";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

export default async function NewBookingPage() {
  const bookers = await loadBookers();
  const printers = await loadPrinters();

  const { userId } = await auth();

  return (
    <main>
      <Form bookers={bookers} printers={printers} userId={userId!} />
    </main>
  );
}
