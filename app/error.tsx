"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center py-5 my-5">
      <h2 className="text-center">Valami hiba történt!</h2>
      <div className="text-center">
        <button className="btn btn-secondary" onClick={() => reset()}>
          Próbáld újra!
        </button>
      </div>
    </main>
  );
}
