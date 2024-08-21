export interface TokenDetails {
  name: string;
  mint: string;
  native: boolean;
  price: string;
  image: string;
}
export const SUPPORTED_TOKENS: TokenDetails[] = [
  {
    name: "SOL",
    mint: "So11111111111111111111111111111111111111112",
    native: true,
    price: "1",
    image: "https://static.crypto.com/token/icons/solana/color_icon.png",
  },
  {
    name: "USDC",
    mint: "FSxJ85FXVsXSr51SeWf9ciJWTcRnqKFSmBgRD",
    native: true,
    price: "1",
    image: "https://static.crypto.com/token/icons/usd-coin/color_icon.png",
  },
  {
    name: "USDT",
    mint: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
    native: true,
    price: "1",
    image: "https://static.crypto.com/token/icons/tether/color_icon.png",
  },
];
