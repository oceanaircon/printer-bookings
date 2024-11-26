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
        <h3>Bookings</h3>
        <Search placeholder="Booker's name, email or serial..." />
        <a href="/bookings/new" className="mobile-button" aria-current="page">
        New Booking
      </a>
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
