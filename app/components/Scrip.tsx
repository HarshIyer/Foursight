import Link from "next/link";
import { Suspense } from "react";

export default function Scrip(props: {
  title: string;
  ltp: number;
  symbol: string;
  change: number;
  changePercent: number;
  opening: number;
  closing: number;
  equityType: string;
  yearlyHigh: number;
  yearlyLow: number;
  marketCap: string;
}) {
  return (
    <Suspense
      fallback={
        <div className="text-2xl font-extrabold text-black">Loading...</div>
      }
    >
      <div className="min-w-[450px] md:min-w-[500px] mr-4 my-2 flex flex-col border border-2 p-4 rounded-lg border-[#858585]]">
        <Link href={`/stocks/${encodeURIComponent(props.symbol)}`}>
          <h1
            className={
              props.change > 0
                ? "green-text text-xl font-bold"
                : "red-text text-xl font-bold"
            }
          >
            {props.title}
          </h1>
          <div className="flex flex-row my-1">
            <p className="text-lg text-black font-bold">₹{props.ltp}</p>
            <p
              className={`ml-2 flex mt-auto items-end justify-end text-md font-semibold  ${
                props.change >= 0 ? "green-text" : "red-text"
              }`}
            >
              {props.change >= 0 ? "+" : ""}
              {props.change} ({props.changePercent}
              %)
            </p>
          </div>
          <div>
            <table className="scrip-table text-md">
              <tbody>
                <tr>
                  <td className="font-semibold">Opening</td>
                  <td className="pr-4 grey-text">₹{props.opening}</td>
                  <td className="font-semibold">52 Wk High</td>
                  <td className=" grey-text">₹{props.yearlyHigh}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Closing</td>
                  <td className="pr-4 grey-text">₹{props.closing}</td>
                  <td className="font-semibold">52 Wk Low</td>
                  <td className=" grey-text">₹{props.yearlyLow}</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4">Equity Type</td>
                  <td className="pr-4 grey-text">{props.equityType}</td>
                  <td className="font-semibold pr-4">Market Cap (Cr.)</td>
                  <td className=" grey-text">{props.marketCap}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Link>
      </div>
    </Suspense>
  );
}
