import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const BookersPage = () => {
  return (
    <div>
      <Link href="/bookers/new">
        <Button>Új ügyfél</Button>
      </Link>
    </div>
  );
};

export default BookersPage;
