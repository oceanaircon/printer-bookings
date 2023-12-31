import Image from "next/image";
import { Bookings } from "./bookings";
import { LoginButton } from "./auth";
import { LogoutButton } from "./auth";

export default function Home() {
  return (
    <div>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <h2>Kliens hívás</h2>
      <Bookings></Bookings>
    </div>
  );
}
