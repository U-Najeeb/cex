import { TokenDetails } from "@/lib/Constants";
import axios from "axios";
import { useEffect, useState } from "react";

export interface TokenWithbalance extends TokenDetails {
  balance: string;
  usdBalance: string;
}

export function useTokens(address: string) {
  const [tokenBalances, setTokenBalances] = useState<{
    totalBalance: number;
    tokens: TokenWithbalance[];
  } | null>(null);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    axios.get(`/api/tokens?address=${address}`).then((res) => {
      setTokenBalances(res.data);
      setLoadingData(false);
    });
  }, []);

  return {
    loadingData,
    tokenBalances,
  };
}
