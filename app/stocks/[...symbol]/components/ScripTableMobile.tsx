export default function ScripTableMobile(props: any) {
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
  } = props;
  return (
    <div className="flex  items-center">
      <table className="border-separate border-spacing-4">
        <tbody>
          <tr>
            <td className="table-title font-semibold pr-12">
              Today&apos;s Open
            </td>
            <td className="pr-4">₹ {open}</td>
          </tr>
          <tr>
            <td className="table-title font-semibold pr-12">
              Today&apos; High
            </td>
            <td className="pr-4">₹ {high}</td>
          </tr>
          <tr>
            <td className="table-title font-semibold pr-12">Upper Circuit</td>
            <td className="pr-4">₹ {highPriceRange}</td>
          </tr>

          <tr>
            <td className="table-title font-semibold pr-12">
              Yesterday&apos;s Close
            </td>

            <td className="pr-4">₹ {close}</td>
          </tr>
          <tr>
            <td className="table-title font-semibold pr-12">Today&apos; Low</td>
            <td className="pr-4">₹ {low}</td>
          </tr>
          <tr>
            <td className="table-title font-semibold pr-12">Lower Circuit</td>
            <td className="pr-4">₹ {lowPriceRange}</td>
          </tr>
          <tr>
            <td className="table-title font-semibold pr-12">Volume</td>
            <td className="pr-4">{volume}</td>
          </tr>
          <tr>
            <td className="table-title font-semibold pr-12">Total Buy Qty</td>
            <td className="pr-4">{totalBuyQty}</td>
          </tr>
          <tr>
            <td className="table-title font-semibold pr-12">Total Sell Qty</td>
            <td className="pr-4">{totalSellQty}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
