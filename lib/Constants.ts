import { Connection } from "@solana/web3.js";
import axios from "axios";
import { SUPPORTED_TOKENS } from "./tokens";

let LAST_UPDATED: number | null = null;
const TOKEN_PRICE_REFRESH_INTERVAL = 60 * 1000;

let prices: {
  [key: string]: {
    price: string;
  };
} = {};

export const connection = new Connection(
  "https://solana-mainnet.g.alchemy.com/v2/XPm2j7aYa9ZBJSDI0kSkEn2CI7a1p9b_"
);

export async function getSupportedTokens() {
  if (
    !LAST_UPDATED ||
    new Date().getTime() - LAST_UPDATED < TOKEN_PRICE_REFRESH_INTERVAL
  ) {
    const response = await axios.get(
      "https://price.jup.ag/v6/price?ids=SOL,USDC,USDT"
    );
    prices = response.data.data;
    LAST_UPDATED = new Date().getTime();
  }

  return SUPPORTED_TOKENS.map((s) => ({
    ...s,
    price: prices[s.name]?.price,
  }));
}

getSupportedTokens();
