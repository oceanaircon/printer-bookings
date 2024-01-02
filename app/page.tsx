import { LoginButton } from "./auth";
import { LogoutButton } from "./auth";
import BookingsPage from "./bookings/page";

export default function Home() {
  return (
    <div>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <BookingsPage></BookingsPage>
    </div>
  );
}
