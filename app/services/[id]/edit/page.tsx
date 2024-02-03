import { fetchServiceById } from "@/app/lib/data";
import Form from "@/app/ui/services/edit-form";
import { notFound } from "next/navigation";

export default async function UpdateServicePage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;
  const service = await fetchServiceById(id);
  console.log(service);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <Form service={service} />
    </main>
  );
}
