"use client";

export default function PrintPage() {
  function handlePrint() {
    window.print();
  }
  return <button className="btn btn-dark btn-sm" onClick={handlePrint}>Nyomtatás</button>;
}
