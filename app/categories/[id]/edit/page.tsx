import { fetchCategoryById } from "@/app/lib/data";
import Form from "@/app/ui/categories/edit-form";
import { notFound } from "next/navigation";

export default async function UpdateCategoryPage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;
  const category = await fetchCategoryById(id);
  console.log(category);

  if (!category) {
    notFound();
  }

  return (
    <main>
      <Form category={category} />
    </main>
  );
}
