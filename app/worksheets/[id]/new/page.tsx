import Form from "@/app/ui/worksheets/create-form";
import { loadServices, fetchBookingById } from "@/app/lib/data";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

export default async function NewWorksheetPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const booking = await fetchBookingById(id);

  const services = await loadServices();

  const { userId } = await auth();

  return (
    <main>
      <Form booking={booking} services={services} userId={userId!} />
    </main>
  );
}
