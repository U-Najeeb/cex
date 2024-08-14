"use client";

import React from "react";
import Greeting from "./Greeting";
import Assets from "./Assets";
import { useSession } from "next-auth/react";
import Loader from "@/components/ui/Loader";
import { useRouter } from "next/navigation";

function ProfileCard({ publicKey }: { publicKey: string }) {
  const session = useSession();
  const router = useRouter();

  if (!session?.data?.user) {
    router.push("/");
  }
  if (session.status == "loading") {
    return <Loader size="40" type="fullscreen" />;
  }

  return (
    <div className="pt-8 flex justify-center rounded">
      <div className="max-w-xl bg-white shadow-lg rounded w-full  ">
        <Greeting
          image={session.data?.user?.image ?? ""}
          name={session.data?.user?.name ?? ""}
        />
        <Assets publicKey={publicKey} />
      </div>
    </div>
  );
}

export default ProfileCard;
