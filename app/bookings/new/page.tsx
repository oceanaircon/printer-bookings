import Form from "@/app/ui/bookings/create-form";
import { getCurrentUserId, loadBookers, loadPrinters } from "@/app/lib/data";
import { currentUser } from "@clerk/nextjs";

export default async function NewBookingPage() {
  const bookers = await loadBookers();
  const printers = await loadPrinters();

  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress as any;
  const userid = await getCurrentUserId(email);

  return (
    <main>
      <Form bookers={bookers} printers={printers} userid={userid as any} />
      <h3>{userid}</h3>
    </main>
  );
}
