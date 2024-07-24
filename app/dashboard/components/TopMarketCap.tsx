import { NavTransition } from "@/app/components/navbar/NavTransition";
import Link from "next/link";

export default function TopMarketCap(props: any) {
  const { data } = props;
  return (
    <div>
      <p className="font-semibold text-xl mb-4 ">Top By Market Cap</p>
      <div className="w-full border-2 border-gray px-2 py-2 rounded-lg  overflow-x-scroll">
        <table className="border-separate border-spacing-3 w-full text-sm text-center">
          <tbody>
            <tr className="font-extrabold text-[#696969]">
              <td className="text-start">COMPANY</td>
              <td>PRICE</td>
              <td>MARKET CAP (Cr.)</td>
              <td>52W HIGH</td>
              <td>52W LOW</td>
            </tr>

            <tr className="col-span-5">
              <td colSpan={5}>
                <hr className="w-full"></hr>
              </td>
            </tr>

            {data.data?.records.map((coin: any) => (
              <tr className="font-semibold " key={coin.id}>
                <td
                  className={`text-start ${coin.livePriceDto.dayChange > 0 ? "green-text" : "red-text"}`}
                >
                  <NavTransition
                    className="text-base line-clamp-1"
                    href={`/stocks/${encodeURIComponent(coin.nseScriptCode)}`}
                  >
                    {coin.companyName}
                  </NavTransition>
                </td>
                <td>
                  <div className="flex flex-col">
                    <div>₹{coin.livePriceDto.ltp}</div>
                    <div
                      className={`text-xs ${coin.livePriceDto.dayChange > 0 ? "green-text" : "red-text"}`}
                    >
                      {coin.livePriceDto.dayChange.toFixed(2)} (
                      {coin.livePriceDto.dayChangePerc.toFixed(2)}%)
                    </div>
                  </div>
                </td>
                <td className="text-gray-500">
                  {parseInt(coin.marketCap) / 10000000}
                </td>
                <td className="green-text">₹{coin.yearlyHighPrice}</td>
                <td className="red-text">₹{coin.yearlyLowPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
