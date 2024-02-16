import React from "react";
import Search from "../ui/search";
import { Suspense } from "react";
import BookingsTable from "../ui/bookings/bookingsTable";
import Pagination from "@/app/ui/pagination";
import { fetchBookingPages } from "../lib/data";

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

  const totalPages = await fetchBookingPages(query);

  return (
    <div className=" py-5 my-4 row justify-content-evenly">
      <div className="col row-auto text-center">
        <h3>Szerződések</h3>
        <Search placeholder="ügyfél neve, email-címe vagy cikkszám..." />
        <Suspense key={query + currentPage} fallback={""}>
          <BookingsTable query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-1 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
