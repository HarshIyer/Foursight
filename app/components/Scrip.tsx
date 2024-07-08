import Link from "next/link";

export default function Scrip(props: {
  title: string;
  ltp: number;
  symbol: string;
  change: number;
  changePercent: number;
  opening: number;
  closing: number;
  avg7dVolume: string;
  yearlyHigh: number;
  yearlyLow: number;
  marketCap: string;
}) {
  return (
    <div className="min-w-[500px] mr-4 my-2 flex flex-col border border-2 p-4 rounded-lg border-[#858585]]">
      <Link href={`/stock/${props.symbol}`}>
        <h1 className="text-2xl green-text font-bold">{props.title}</h1>
        <div className="flex flex-row my-1">
          <p className="text-xl text-black font-bold">₹{props.ltp}</p>
          <p
            className={`ml-2 flex mt-auto items-end justify-end text-md font-semibold  ${
              props.change >= 0 ? "green-text" : "red-text"
            }`}
          >
            {props.change >= 0 ? "+" : "-"}
            {props.change} ({props.changePercent}
            %)
          </p>
        </div>
        <div>
          <table className="scrip-table">
            <tbody>
              <tr>
                <td className="font-semibold">Opening</td>
                <td className="pr-12 grey-text">₹{props.opening}</td>
                <td className="font-semibold">52 Wk High</td>
                <td className=" grey-text">₹{props.yearlyHigh}</td>
              </tr>
              <tr>
                <td className="font-semibold">Closing</td>
                <td className="pr-12 grey-text">₹{props.closing}</td>
                <td className="font-semibold">52 Wk Low</td>
                <td className=" grey-text">₹{props.yearlyLow}</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4">Avg 7d Volume</td>
                <td className="pr-12 grey-text">{props.avg7dVolume}</td>
                <td className="font-semibold pr-4">Market Cap (Cr.)</td>
                <td className=" grey-text">{props.marketCap}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Link>
    </div>
  );
}
