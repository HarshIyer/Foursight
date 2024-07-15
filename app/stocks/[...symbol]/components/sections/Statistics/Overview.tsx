import ScripTable from "../../ScripTable";
import Orderbook from "../Orderbook";

export default function Overview(props: any) {
  const {
    symbol,
    ltp,
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

  let leftPercent = (((ltp - low) / (high - low)) * 100 - 1).toFixed(0);
  let rightPercent = (((high - ltp) / (high - low)) * 100 - 1).toFixed(0);
  let leftWidth = `${leftPercent}%`;
  let rightWidth = `${rightPercent}%`;
  return (
    <div>
      <div className="flex flex-col my-6 ">
        <h1 className="text-md font-medium">Today&apos;s Performance</h1>
        <div className="flex max-w-[420px] items-center flex-row">
          <div
            className={` h-2 bg-teal-600`}
            style={{ width: leftWidth }}
          ></div>
          <div className={`w-[2%] h-5 bg-black`}></div>
          <div
            className={` h-2 bg-teal-600`}
            style={{ width: rightWidth }}
          ></div>
        </div>
        <div className="flex flex-row justify-between max-w-[420px]">
          <div className="flex flex-col">
            <h1 className="text-md">Low</h1>
            <p className="text-sm text-gray-700">₹ {low}</p>
          </div>
          <div>
            {" "}
            <h1 className="text-md text-right">High</h1>
            <p className="text-sm text-gray-700">₹ {high}</p>
          </div>
        </div>
      </div>
      <hr className="text-black" />
      <ScripTable {...props} />
      <hr className="text-black" />
      <div>
        <Orderbook symbol={symbol} />
      </div>
    </div>
  );
}
