import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen mt-5 pt-5">
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold">404 Not Found</h2>
        <p className="mt-4">A keresett munkalap nem található.</p>
        <div className="mt-6">
          <Link href="/worksheets">
            Vissza
          </Link>
        </div>
      </div>
    </div>
  );
}
