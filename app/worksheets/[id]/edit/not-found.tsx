import Link from 'next/link';
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Nem található a kért munkalap.</p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md text-sm"
      >
        Vissza
      </Link>
    </main>
  );
}