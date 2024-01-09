import Link from "next/link";

export function NewWorksheetButton({ id }: { id: number }) {
  return <Link href={`/worksheets/${id}/new`}>Új munkalap</Link>;
}
