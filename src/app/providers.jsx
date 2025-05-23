"use client";

import { SessionProvider } from "next-auth/react";
import { UserProvider } from "./context/userProvider";

export function Providers({ children }) {
  return (
    <SessionProvider>
      {" "}
      <UserProvider>{children}</UserProvider>
    </SessionProvider>
  );
}
