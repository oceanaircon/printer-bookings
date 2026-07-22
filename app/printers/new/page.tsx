import Form from "@/app/ui/printers/create-form";
import { loadCategories } from "@/app/lib/data";

export const dynamic = "force-dynamic";

export default async function NewPrinterPage() {
  const categories = await loadCategories();

  return (
    <main>
      <Form categories={categories} />
    </main>
  );
}
