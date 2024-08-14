"use client";
import { Button } from "@/components/ui/Button";
import Loader from "@/components/ui/Loader";
import { Skeleton } from "@/components/ui/Skeleton";
import React, { useEffect, useState } from "react";
import { TokenList } from "./TokenList";
import { useTokens } from "@/app/api/hooks/useTokens";

function Assets({ publicKey }: { publicKey: string }) {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const { loadingData, tokenBalances } = useTokens(publicKey);

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

  return (
    <div className="text-slate-400 font-medium mt-4">
      <span className="p-8">Account Assets</span>
      <br />
      <div className="flex justify-between items-center px-8">
        {loadingData ? (
          <Skeleton className="w-44 h-10" />
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
      <div></div>
      <div className="bg-[#F2F8FC]">
        <TokenList tokens={tokenBalances?.tokens || []} />
      </div>
    </div>
  );
}

export default Assets;
