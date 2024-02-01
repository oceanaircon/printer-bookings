import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { AiOutlinePrinter } from "react-icons/ai";
import Script from "next/script";

const Topnav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <AiOutlinePrinter size={24} />
            &nbsp;&nbsp; Printer Bookings
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Főoldal
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/bookings">
                  Szerződések
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/bookers">
                  Ügyfelek
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/printers">
                  Printerek
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/worksheets">
                  Munkalapok
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/services">
                  Hibák
                </Link>
              </li>
            </ul>
            <div className="pt-2 px-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </nav>
      <Script type="text/javascript" src="../lib/scripts.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></Script>
    </div>
  );
};

export default Topnav;
