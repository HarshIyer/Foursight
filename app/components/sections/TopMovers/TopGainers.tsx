import Link from "next/link";
import Scrip from "../../Scrip";
import { Suspense } from "react";

export default function TopGainers(props: { type: string; apiData: any }) {
  let topGainers = props.apiData;

  return (
    <div className="mx-4 mb-12 my-4">
      <Link href="/topmovers">
        <h1 className="text-3xl font-bold">
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

      <div className="flex flex-row overflow-x-scroll mt-4">
        {topGainers?.map((scrip: any, index: number) => (
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
