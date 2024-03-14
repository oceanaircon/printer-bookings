import Form from "@/app/ui/worksheets/create-form";
import { loadServices, fetchBookingById } from "@/app/lib/data";
import { auth } from "@clerk/nextjs";

export default async function NewWorksheetPage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;

  const booking = await fetchBookingById(id);

  const services = await loadServices();

  const { userId } = auth() as any;

  return (
    <main>
      <Form booking={booking} services={services} userId={userId} />
    </main>
  );
}
