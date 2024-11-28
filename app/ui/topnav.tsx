"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import { AiOutlinePrinter } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { usePathname } from "next/navigation";

function Topnav() {
  const pathname = usePathname();
  const color = { color: "white", fontSize: "1.5em" };
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="md"
      className="bg-body-tertiary"
      data-bs-theme="dark"
    >
      <Container className="m-0">
        <div className="mx-3">
          <AiOutlinePrinter style={color}></AiOutlinePrinter>
        </div>
        <Navbar.Brand href="/">Printer Bookings</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey={pathname} className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/bookings">Bookings</Nav.Link>
            <Nav.Link href="/bookers">Bookers</Nav.Link>
            <Nav.Link href="/printers">Printers</Nav.Link>
            <Nav.Link href="/worksheets">Worksheets</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
          </Nav>
          <UserButton afterSignOutUrl="/" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topnav;
