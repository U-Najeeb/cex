"use client";
import React from "react";
import { Button } from "./ui/Button";
import { signIn, signOut, useSession } from "next-auth/react";

function Appbar() {
  const session = useSession();
  return (
    <div className="border-b px-2 py-2 flex justify-between">
      <div className="text-xl font-poppins font-bold flex flex-col justify-center">
        DCEX
      </div>
      <div>
        {session.data?.user ? (
          <Button
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={() => {
              signIn();
            }}
          >
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
}

export default Appbar;
