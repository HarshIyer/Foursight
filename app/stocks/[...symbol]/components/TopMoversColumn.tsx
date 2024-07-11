import TopMoversItem from "./TopMoversItem";

export default function TopMoversColumn(data: any) {
  const TOP_GAINERS: Array<object> = data.data.TOP_GAINERS.items;
  const TOP_LOSERS: Array<object> = data.data.TOP_LOSERS.items;
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-xl md:text-2xl green-text">Top Gainers</h1>
      <div className="border border-[#858585] p-2 rounded-lg my-3">
        {TOP_GAINERS.map((item: any) => (
          <div key={item.symbol} className="flex flex-col justify-between">
            <TopMoversItem data={item} />
          </div>
        ))}
      </div>
      <h1 className="text-xl md:text-2xl red-text">Top Losers</h1>
      <div className="border border-[#858585] p-2 rounded-lg my-3">
        {TOP_LOSERS.map((item: any) => (
          <div key={item.symbol} className="flex flex-col justify-between">
            <TopMoversItem data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
