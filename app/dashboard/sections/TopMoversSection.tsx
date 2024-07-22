import TopLosers from "./TopLosers";
import TopGainers from "./TopGainers";
import Link from "next/link";
import { NavTransition } from "@/app/components/navbar/NavTransition";

export default function TopMoversSection(props: any) {
  const { data } = props;
  return (
    <div className="my-8">
      <div className="flex flex-col mb-4">
        <div className="flex flex-row justify-between items-end">
          <p className="font-semibold text-xl mb-2 green-text">Top Gainers</p>
          <NavTransition className="" href="/topmovers">
            <p className="font-semibold text-sm mb-2 green-text">View More</p>
          </NavTransition>
        </div>
        <TopGainers data={data.TOP_GAINERS} />
      </div>
      <div className="flex flex-col mb-4">
        <div className="flex flex-row justify-between items-end">
          <p className="font-semibold text-xl mb-4 red-text mt-8">Top Losers</p>
          <NavTransition className="" href="/topmovers">
            <p className="font-semibold text-sm mb-2 green-text">View More</p>
          </NavTransition>
        </div>
        <TopLosers data={data.TOP_LOSERS} />
      </div>
    </div>
  );
}
