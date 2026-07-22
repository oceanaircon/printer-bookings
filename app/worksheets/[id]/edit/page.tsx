import { fetchWorksheetById, loadServices } from "@/app/lib/data";
import Form from "@/app/ui/worksheets/edit-form";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function UpdateWorksheetPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const worksheet = await fetchWorksheetById(id);
  const services = await loadServices();
  const { userId } = await auth();

  if (!worksheet) {
    notFound();
  }

  return (
    <main>
      <Form worksheet={worksheet} services={services} userId={userId!} />
    </main>
  );
}
