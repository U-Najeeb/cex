import { Skeleton } from "@/components/ui/Skeleton";
import { useSession } from "next-auth/react";

/* eslint-disable @next/next/no-img-element */
function Greeting({
  image,
  name,
}: {
  image: string | undefined | null;
  name: string | undefined | null;
}) {
  const session = useSession();
  return (
    <div className="flex items-center gap-5 px-7 pt-8">
      {session.status === "loading" ? (
        <Skeleton className="w-20 h-20 rounded-full min-w-20 " />
      ) : (
        <img
          src={image as string}
          alt="profile_picture"
          className="w-20 h-20 rounded-full border-2 "
        />
      )}
      {session.status === "loading" ? (
        <Skeleton className="w-full h-5" />
      ) : (
        <div className="text-xl font-bold">Welcome Back, {name}</div>
      )}
    </div>
  );
}

export default Greeting;
