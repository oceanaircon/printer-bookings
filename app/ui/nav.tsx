import NavBar from "@/app/ui/NavBar";
import { signOut } from "@/auth";

export default function Nav() {
  return (
    <div>
      <NavBar />
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button>Kijelentkezés</button>
      </form>
    </div>
  );
}
