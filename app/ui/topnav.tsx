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
        <Navbar.Brand href="/">Alfa-Kontakt</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey={pathname} className="me-auto">
            <Nav.Link href="/">Főoldal</Nav.Link>
            <Nav.Link href="/bookings">Szerződések</Nav.Link>
            <Nav.Link href="/bookers">Ügyfelek</Nav.Link>
            <Nav.Link href="/printers">Printerek</Nav.Link>
            <Nav.Link href="/worksheets">Munkalapok</Nav.Link>
            <Nav.Link href="/services">Hibák</Nav.Link>
          </Nav>
          <UserButton afterSignOutUrl="/" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topnav;
