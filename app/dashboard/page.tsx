import ProfileCard from "./components/ProfileCard";
import db from "@/app/db/PrismaClient";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

async function getBalance() {
  const session = await getServerSession(authConfig);

  const userWallet = await db.solWallet.findFirst({
    where: {
      userId: session?.user?.uid,
    },
    select: {
      publicKey: true,
    },
  });

  if (!userWallet) {
    return {
      error: "No solana wallet associated to the user",
    };
  }

  return { error: null, userWallet };
}

async function Dashboard() {
  const userWallet = await getBalance();
  if (userWallet.error || !userWallet.userWallet?.publicKey) {
    return <>No solana wallet found</>;
  }
  return (
    <div className="bg-[#F2F8FC] h-[calc(100dvh-3.6rem)]">
      <ProfileCard publicKey={userWallet.userWallet?.publicKey} />
    </div>
  );
}

export default Dashboard;
