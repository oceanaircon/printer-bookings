import { fetchBookerById } from "@/app/lib/data";
import Form from "@/app/ui/bookers/edit-form";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function UpdateBookerPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const booker = await fetchBookerById(id);
  console.log(booker);
  
  if (!booker) {
    notFound();
  }

  return (
    <main>
      <Form booker={booker} />
    </main>
  );
}
