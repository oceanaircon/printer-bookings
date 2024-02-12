import { fetchBookerById } from "@/app/lib/data";
import Form from "@/app/ui/bookers/edit-form";
import { notFound } from "next/navigation";

export default async function UpdateBookerPage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;
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
