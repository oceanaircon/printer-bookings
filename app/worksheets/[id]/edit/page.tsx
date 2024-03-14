import { fetchWorksheetById, loadServices } from "@/app/lib/data";
import Form from "@/app/ui/worksheets/edit-form";
import { auth } from "@clerk/nextjs";
import { notFound } from "next/navigation";

export default async function UpdateWorksheetPage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;
  const worksheet = await fetchWorksheetById(id);
  const services = await loadServices();
  const { userId } = auth() as any;

  if (!worksheet) {
    notFound();
  }

  return (
    <main>
      <Form worksheet={worksheet} services={services} userId={userId} />
    </main>
  );
}
