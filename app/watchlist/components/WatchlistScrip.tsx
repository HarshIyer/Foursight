import { symbols } from "@/app/components/symbols";
import Link from "next/link";

export default function WatchlistScrip(props: any) {
  const symbol = props.scrip.symbol;
  const ltp = props.scrip.ltp;
  const dayChange = props.scrip.dayChange;
  const dayChangePerc = props.scrip.dayChangePerc;
  function getCompanyName(symbol: string) {
    let companyName = "";
    symbols.forEach((scrip) => {
      if (scrip.Scrip === decodeURIComponent(symbol)) {
        companyName = scrip["Company Name"];
      }
    });
    return companyName;
  }
  let companyName = getCompanyName(symbol) || "";
  return (
    <div>
      <div className="flex flex-col border border-2 border-[#E0E0E0] p-4 px-6  rounded-lg">
        <Link href={`/stocks/${encodeURIComponent(symbol)}`}>
          <div>
            <h1
              className={`${
                dayChange > 0 ? "green-text" : "red-text"
              } text-xl mb-6 font-bold`}
            >
              {companyName}
            </h1>
            <div className="flex w-full justify-between">
              <h1>₹{ltp}</h1>
              <div className="flex flex-row">
                <h1
                  className={`${
                    dayChange > 0 ? "green-text" : "red-text"
                  } mr-1`}
                >
                  {dayChange.toFixed(2)}
                </h1>
                <h1
                  className={`${
                    dayChange > 0 ? "green-text" : "red-text"
                  } text-sm flex items-end`}
                >
                  ({dayChangePerc > 0 ? "+" : ""}
                  {dayChangePerc.toFixed(2)}%)
                </h1>
              </div>
            </div>
          </div>
        </Link>
        <div className="w-full">
          <button className="w-full text-center bg-white border border-2 border-[#E0E0E0] hover:bg-[#ececec] transition transition-all-0.5s px-4 py-2 rounded-md mt-2">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
