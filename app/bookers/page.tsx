import React from "react";
import Link from "next/link";
import Search from "../ui/search";
import { Suspense } from "react";
import BookersTable from "../ui/bookers/bookersTable";

const BookersPage = async ({
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
      <Search placeholder="ügyfél neve, címe vagy email-címe..." />
      <Suspense key={query + currentPage} fallback={""}>
        <BookersTable query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
};

export default BookersPage;
