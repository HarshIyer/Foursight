import Link from "next/link";
import Scrip from "../Scrip";

export default function Watchlist() {
  return (
    <div className="mx-4 mb-12 my-4">
      <h1 className="text-3xl font-bold">
        <Link href="/watchlist">Your Watchlist </Link>
      </h1>
      <div className="flex flex-row overflow-x-scroll mt-4">
        <Scrip
          title="Reliance Industries"
          ltp={2500}
          symbol="RELIANCE"
          change={5}
          changePercent={0.5}
          opening={2400}
          equityType="STOCKS"
          closing={2450}
          yearlyHigh={2600}
          yearlyLow={2300}
          marketCap="21.65T"
        />
        <Scrip
          title="Reliance Industries"
          ltp={2500}
          symbol="RELIANCE"
          change={5}
          changePercent={0.5}
          opening={2400}
          equityType="STOCKS"
          closing={2450}
          yearlyHigh={2600}
          yearlyLow={2300}
          marketCap="21.65T"
        />
        <Scrip
          title="Reliance Industries"
          ltp={2500}
          symbol="RELIANCE"
          change={5}
          changePercent={0.5}
          opening={2400}
          equityType="STOCKS"
          closing={2450}
          yearlyHigh={2600}
          yearlyLow={2300}
          marketCap="21.65T"
        />
        <Scrip
          title="Reliance Industries"
          ltp={2500}
          symbol="RELIANCE"
          change={5}
          changePercent={0.5}
          opening={2400}
          equityType="STOCKS"
          closing={2450}
          yearlyHigh={2600}
          yearlyLow={2300}
          marketCap="21.65T"
        />
      </div>
    </div>
  );
}
