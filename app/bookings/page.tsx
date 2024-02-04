import React from "react";
import Link from "next/link";
import Search from "../ui/search";
import { Suspense } from "react";
import BookingsTable from "../ui/bookings/bookingsTable";

const BookingsPage = async ({
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
    <div className="my-3">
      <div className="py-5">
        <h3>Szerződések</h3>
        <Link href="/bookings/new">
          <p>Új szerződés</p>
        </Link>

        <Search placeholder="ügyfél neve vagy email-címe..." />
        <Suspense key={query + currentPage} fallback={""}>
          <BookingsTable query={query} currentPage={currentPage} />
        </Suspense>
      </div>
    </div>
  );
};

export default BookingsPage;
