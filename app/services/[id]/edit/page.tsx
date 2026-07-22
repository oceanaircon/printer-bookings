import { fetchServiceById } from "@/app/lib/data";
import Form from "@/app/ui/services/edit-form";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function UpdateServicePage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
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
