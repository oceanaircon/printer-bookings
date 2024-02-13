import React from "react";
import Pagination from "@/app/ui/pagination";
import Search from "../ui/search";
import { Suspense } from "react";
import { fetchWorksheetPages } from "@/app/lib/data";
import WorksheetsTable from "../ui/worksheets/worksheetsTable";

const WorksheetsPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchWorksheetPages(query);

  return (
    <div className="my-4 py-5 text-center">
      <h3>Munkalapok</h3>
      <Search placeholder="bejelentő, printer vagy hiba neve ..." />
      <Suspense key={query + currentPage} fallback={""}>
        <WorksheetsTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-1 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default WorksheetsPage;
