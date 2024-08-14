import { TokenWithbalance } from "@/app/api/hooks/useTokens";
import TokenRow from "./TokenRow";

export function TokenList({ tokens }: { tokens: TokenWithbalance[] }) {
  return (
    <div className="px-8 py-4 flex flex-col gap-4">
      {tokens.map((t, index) => (
        <TokenRow key={index} token={t} />
      ))}
    </div>
  );
}
