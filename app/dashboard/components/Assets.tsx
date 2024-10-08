"use client";
import { Button } from "@/components/ui/Button";
import Loader from "@/components/ui/Loader";
import { Skeleton } from "@/components/ui/Skeleton";
import React, { useEffect, useState } from "react";
import { TokenList } from "./TokenList";
import { useTokens } from "@/app/api/hooks/useTokens";
import Swap from "./Swap";

function Assets({ publicKey }: { publicKey: string }) {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const { loadingData, tokenBalances } = useTokens(publicKey);
  const [selectedTab, setSelectedTab] = useState<Tab>("tokens")

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [copied]);

  const copyHandler = () => {
    setLoading(true);
    navigator.clipboard.writeText(publicKey).then(() => {
      setTimeout(() => {
        setCopied(true);
        setLoading(false);
      }, 1000);
    });
  };

  type Tab = "tokens" | "send" | "add_funds" | "swap" | "withdraw"
  const tabs: { id: Tab; name: string }[] = [
    { id: "tokens", name: "Tokens" },
    { id: "send", name: "Send" },
    { id: "add_funds", name: "Add funds" },
    { id: "withdraw", name: "Withdraw" },
    { id: "swap", name: "Swap" },
  ];

  return (
    <div className="text-slate-400 font-medium mt-4">
      <span className="p-8">Account Assets</span>
      <br />
      <div className="flex justify-between items-center px-8 mb-3">
        {loadingData ? (
          <Skeleton className="w-44 h-8 " />
        ) : (
          <div className="flex justify-center items-center ">
            <h1 className="text-[55px] font-[800] text-black">
              ${tokenBalances?.totalBalance}
            </h1>
            <div className="text-3xl text-slate-500 ml-2 font-extrabold flex flex-col justify-end pb-0">
              USD
            </div>
          </div>
        )}
        <div>
          <Button onClick={copyHandler}>
            {loading ? (
              <Loader color="white" />
            ) : copied ? (
              "Copied"
            ) : (
              "Your Wallet Address"
            )}
          </Button>
        </div>
      </div>
      <div className="flex justify-between px-6 pb-3">
        {
          tabs.map(tab => <Button key={tab.id} onClick={() => setSelectedTab(tab.id)} className={`${selectedTab === tab.id ? 'bg-primary' : "bg-primary/60"}`}>
            {tab.name}
          </Button>)
        }
      </div>
      {selectedTab === 'tokens' ? <div className="bg-slate-200 rounded-b">
        <TokenList tokens={tokenBalances?.tokens || []} />
      </div> : selectedTab === 'swap' ? <Swap /> : null}
    </div>
  );
}

export default Assets;
