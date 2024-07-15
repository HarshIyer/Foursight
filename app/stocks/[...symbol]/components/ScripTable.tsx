export default function ScripTable(stockData: any) {
  const {
    open,
    close,
    high,
    low,
    volume,
    lowPriceRange,
    highPriceRange,
    totalBuyQty,
    totalSellQty,
    dayChange,
    dayChangePerc,
    lastTradeQty,
    ltp,
    lastTradeTime,
  } = stockData;

  return (
    <table className="text-sm md:text-base border-separate border-spacing-x-0 border-spacing-y-3">
      <tbody>
        <tr>
          <td className="table-title font-semibold pr-12">Open</td>
          <td className="table-title font-semibold pr-12">Volume</td>
          <td className="table-title font-semibold pr-12">Upper Circuit</td>
        </tr>
        <tr>
          <td className="pr-4 green-text font-normal tracking-wide">
            ₹ {open}
          </td>
          <td className="pr-4 green-text font-normal tracking-wide">
            {volume.toLocaleString("hi")}
          </td>
          <td className="pr-4 green-text font-normal tracking-wide">
            ₹ {highPriceRange}
          </td>
        </tr>
        <tr>
          <td className="table-title font-semibold pr-12">
            Yesterday&apos;s Close
          </td>
          <td className="table-title font-semibold pr-12">Day Change</td>
          <td className="table-title font-semibold pr-12">Lower Circuit</td>
        </tr>
        <tr>
          <td className="pr-4 green-text font-normal tracking-wide ">
            ₹ {close}
          </td>
          <td
            className={`pr-4  font-normal tracking-wide ${
              dayChangePerc > 0 ? "green-text" : "red-text"
            }`}
          >
            {dayChangePerc.toFixed(2)}%
          </td>
          <td className="pr-4 green-text font-normal tracking-wide ">
            ₹ {lowPriceRange}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
// {
//     "type": "LIVE_PRICE",
//     "symbol": "RELIANCE",
//     "open": 3195.2,
//     "high": 3201,
//     "low": 3161,
//     "close": 3201.8,
//     "ltp": 3181.7,
//     "volume": 2529805,
//     "tsInMillis": 1720515109,
//     "lowPriceRange": 2881.65,
//     "highPriceRange": 3521.95,
//     "totalBuyQty": 167473,
//     "totalSellQty": 311534,
//     "dayChange": -20.100000000000364,
//     "dayChangePerc": -0.6277718783184572,
//     "openInterest": null,
//     "lastTradeQty": 1,
//     "lastTradeTime": 1720515109,
//     "prevOpenInterest": null,
//     "oiDayChange": 0,
//     "oiDayChangePerc": 0,
//     "lowTradeRange": null,
//     "highTradeRange": null
// }
