import React from "react";
import Link from "next/link";
import Search from "../ui/search";
import { Suspense } from "react";
import PrintersTable from "../ui/printers/printersTable";

const PrintersPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="my-4 py-5 text-center">
      <h3>Printerek</h3>
      <Link href="/categories">
        <p>Printer kategóriák</p>
      </Link>
      <Link href="/printers/new">
        <p>Új printer</p>
      </Link>

      <Search placeholder="printer neve vagy szériaszáma..." />
      <Suspense key={query + currentPage} fallback={""}>
        <PrintersTable query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
};

export default PrintersPage;
