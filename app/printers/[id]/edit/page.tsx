import { fetchPrinterById, loadCategories } from "@/app/lib/data";
import Form from "@/app/ui/printers/edit-form";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function UpdatePrinterPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const printer = await fetchPrinterById(id);
  const categories = await loadCategories();
  console.log(printer);

  if (!printer) {
    notFound();
  }

  return (
    <main>
      <Form printer={printer} categories={categories} />
    </main>
  );
}
