import Form from "@/app/ui/bookings/create-form";
import { getCurrentUserId, loadBookers, loadPrinters } from "@/app/lib/data";
import { currentUser } from "@clerk/nextjs";

export default async function NewBookingPage() {
  const bookers = await loadBookers();
  const printers = await loadPrinters();

  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;
  const userid = await getCurrentUserId(email as any);

  return (
    <main>
      <h3>{userid}</h3>
      <Form bookers={bookers} printers={printers} userid={userid as any} />
    </main>
  );
}
