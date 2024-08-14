import { TokenWithbalance } from "@/app/api/hooks/useTokens";
import TokenRow from "./TokenRow";
import { Skeleton } from "@/components/ui/Skeleton";

export function TokenList({ tokens }: { tokens: TokenWithbalance[] | undefined }) {
  const isLoading = !tokens || tokens.length === 0;
  return (
    <div className="px-8 py-4 flex flex-col gap-4">
      {isLoading ? (
        Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex justify-between">
            <div className="flex">
              <Skeleton className="h-10 w-10 rounded-full mr-2 " />
              <div>
                <Skeleton className="h-4 w-24 " />
                <Skeleton className="h-4 w-32 mt-1" />
              </div>
            </div>
            <div>
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16 mt-1" />
            </div>
          </div>
        ))
      ) : (
        tokens.map((t, index) => <TokenRow key={index} token={t} />)
      )}
    </div>
  );
}
