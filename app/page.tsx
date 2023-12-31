import Image from "next/image";
import { Bookings } from "./bookings";

export default function Home() {
  return (
    <div>
      <h2>Kliens hívás</h2>
      <Bookings></Bookings>
    </div>
  );
}
