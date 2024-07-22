import { NavTransition } from "@/app/components/navbar/NavTransition";
import Link from "next/link";

export default function TopMoverComponent(props: any) {
  let { companyName, ltp, dayChange, dayChangePerc, symbol } = props;

  return (
    <div className=" flex flex-col w-fit border-2 my-2 mr-4 rounded-md p-2 pr-8 pl-4">
      <NavTransition
        className=""
        href={`/stocks/${encodeURIComponent(symbol)}`}
      >
        <h1 className="text-lg mb-4 line-clamp-1 font-medium">{companyName}</h1>
        <div className="flex flex-col font-semibold">
          <div
            className={`flex flex-row ${dayChange > 0 ? "green-text" : "red-text"} `}
          >
            <h1 className="text-lg">₹{ltp}</h1>{" "}
            <h1 className=" mt-auto ml-2">
              <div className="flex flex-row">
                <div> {dayChange.toFixed(2)} </div>{" "}
                <div> ({dayChangePerc.toFixed(2)}%)</div>
              </div>
            </h1>
          </div>
        </div>
      </NavTransition>
    </div>
  );
}
