"use client";

import { Button } from "@/app/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch}>
      <div>
        <h1>Jelentkezz be a folytatáshoz:</h1>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="peldaul@peldaul.pe"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password">Jelszó</label>
            <div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                required
                minLength={4}
              />
            </div>
          </div>
        </div>
        <LoginButton />
        <div>
          {errorMessage && (
            <>
              <p>{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  return <Button>Bejelentkezés</Button>;
}
