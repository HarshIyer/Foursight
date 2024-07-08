import Link from "next/link";
import Scrip from "../../Scrip";

export default function TopGainers(props: { type: string }) {
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
        <Scrip
          title="Reliance Industries"
          ltp={2500}
          symbol="RELIANCE"
          change={5}
          changePercent={0.5}
          opening={2400}
          closing={2450}
          avg7dVolume="7.15M"
          yearlyHigh={2600}
          yearlyLow={2300}
          marketCap="21.65T"
        />
        <Scrip
          title="IRFC"
          ltp={2500}
          symbol="IRFC"
          change={5}
          changePercent={0.5}
          opening={2400}
          closing={2450}
          avg7dVolume="7.15M"
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
          closing={2450}
          avg7dVolume="7.15M"
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
          closing={2450}
          avg7dVolume="7.15M"
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
          closing={2450}
          avg7dVolume="7.15M"
          yearlyHigh={2600}
          yearlyLow={2300}
          marketCap="21.65T"
        />
      </div>
    </div>
  );
}
