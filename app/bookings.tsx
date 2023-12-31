"use client";

import { useSession } from "next-auth/react";

export const Bookings = () => {
  const { data: session } = useSession();

  return <pre>{JSON.stringify(session)}</pre>;
};
