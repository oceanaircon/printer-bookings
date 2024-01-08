import Form from "@/app/ui/worksheets/create-form";
import { loadBookings, loadServices } from "@/app/lib/data";

export default async function NewWorksheetPage() {
  const bookings = await loadBookings();
  const services = await loadServices();

  return (
    <main>
      <Form bookings={bookings} services={services} />
    </main>
  );
}
