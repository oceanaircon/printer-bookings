import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import Topnav from "./ui/topnav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Printer Bookings",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topnav />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
