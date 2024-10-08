"use client";

import React from "react";
import { Button } from "./ui/Button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Hero() {
  const session = useSession();
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center">
      <div className="text-6xl font-medium">
        <span>The Indian Cryptocurrency</span>
        <span className="text-blue-500 pl-4">Revolution</span>
      </div>
      <div className="flex justify-center text-xl text-slate-500 pt-6">
        Create a frictionless wallet with just a Google Account.
      </div>
      <div className="flex justify-center text-base text-slate-500 pt-2">
        Convert your INR into Cyptocurrency
      </div>
      <div className="flex justify-center pt-4">
        {!session.data?.user ? (
          <Button
            className="bg-blue-600 "
            onClick={() => {
              signIn("google");
            }}
          >
            Login with Google
          </Button>
        ) : (
          <Button
            className="bg-blue-600 "
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Go to Dashboard
          </Button>
        )}
      </div>
    </div>
  );
}

export default Hero;
