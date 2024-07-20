import Link from "next/link";
import Scrip from "../Scrip";

export default function TopLosers(props: { type: string; apiData: any }) {
  let topLosers = props.apiData;

  return (
    <div className=" mb-12 my-4">
      <Link href="/topmovers">
        <h1 className="text-2xl md:text-3xl font-bold">
          Top{" "}
          <span
            className={
              props.type === "Gainers"
                ? "green-text"
                : props.type === "Losers"
                ? "red-text"
                : "text-black"
            }
          >
            {props.type}
          </span>{" "}
          this week
        </h1>
      </Link>
      <div className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-1 xl:grid-cols-2">
        {topLosers?.map((scrip: any, index: number) => (
          <Scrip
            key={index}
            title={scrip.company.companyName}
            ltp={scrip.stats.ltp}
            symbol={scrip.company.nseScriptCode}
            change={scrip.stats.dayChange.toFixed(2)}
            changePercent={scrip.stats.dayChangePerc.toFixed(2)}
            opening={scrip.stats.high}
            closing={scrip.stats.close}
            equityType={scrip.company.equityType}
            yearlyHigh={scrip.stats.yearHighPrice}
            yearlyLow={scrip.stats.yearLowPrice}
            marketCap={scrip.company.marketCap}
          />
        ))}
      </div>
    </div>
  );
}
