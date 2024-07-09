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
    lastTradeTime,
  } = stockData;

  return (
    <table className="border-separate border-spacing-4">
      <tbody>
        <tr>
          <td className="table-title font-semibold pr-12">Today&apos;s Open</td>
          <td className="pr-4">₹ {open}</td>
          <td className="table-title font-semibold pr-12">Today&apos; High</td>
          <td className="pr-4">₹ {high}</td>
          <td className="table-title font-semibold pr-12">Upper Circuit</td>
          <td className="pr-4">₹ {highPriceRange}</td>
        </tr>
        <tr>
          <td className="table-title font-semibold pr-12">
            Yesterday&apos;s Close
          </td>
          <td className="pr-4">₹ {close}</td>
          <td className="table-title font-semibold pr-12">Today&apos; Low</td>
          <td className="pr-4">₹ {low}</td>
          <td className="table-title font-semibold pr-12">Lower Circuit</td>
          <td className="pr-4">₹ {lowPriceRange}</td>
        </tr>
        <tr>
          <td className="table-title font-semibold pr-12">Volume</td>
          <td className="pr-4">{volume}</td>
          <td className="table-title font-semibold pr-12">Total Buy Qty</td>
          <td className="pr-4">{totalBuyQty}</td>
          <td className="table-title font-semibold pr-12">Total Sell Qty</td>
          <td className="pr-4">{totalSellQty}</td>
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
