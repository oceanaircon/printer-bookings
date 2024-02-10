import React from "react";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { updateWorksheetStatus } from "../lib/data";
import Search from "../ui/search";
import { Suspense } from "react";
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

  return (
    <div className="my-4 py-5 text-center">
      <h3>Munkalapok</h3>
      <Search placeholder="bejelentő, printer vagy hiba neve ..." />
      <Suspense key={query + currentPage} fallback={""}>
        <WorksheetsTable query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
};

export default WorksheetsPage;
