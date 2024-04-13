"use client";

export default function PrintPage() {
  function handlePrint() {
    window.print();
  }
  return <button onClick={handlePrint}>Nyomtatás</button>;
}
