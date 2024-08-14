/* eslint-disable @next/next/no-img-element */

import { TokenWithbalance } from "@/app/api/hooks/useTokens";
import { Skeleton } from "@/components/ui/Skeleton";

function TokenRow({ token }: { token: TokenWithbalance }) {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div>
          <img
            src={token.image}
            className="h-10 w-10 rounded-full mr-2"
            alt="coin-image"
          />
        </div>
        <div>
          <div className="font-bold text-black">{token.name}</div>
          <div className="font-slim text-black">
            1 {token.name} = ~${token.price}
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="font-bold flex justify-end text-black">{token.usdBalance}</div>
          <div className="font-slim flex justify-end text-black ">{token.balance}</div>
        </div>
      </div>
    </div>
  );
}
export default TokenRow;
