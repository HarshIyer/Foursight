import Link from "next/link";

export default function TopMoversItem(data: any) {
  const nseScriptCode = data.data.company.nseScriptCode;
  const ltp = data.data.stats.ltp.toFixed(2);
  const dayChange = data.data.stats.dayChange.toFixed(2);
  const dayChangePerc = data.data.stats.dayChangePerc.toFixed(2);
  return (
    <Link href={`/stocks/${encodeURIComponent(nseScriptCode)}`}>
      <div className="w-full  p-1 ">
        <div className="flex w-full flex-row justify-between my-1">
          <div className="mr-4 md:mr-24 text-sm md:text-md font-bolder ml-2 ">
            {nseScriptCode}
          </div>
          <div className="flex flex-row items-end">
            <p className="mr-2 text-sm md:text-md">{ltp}</p>
            <p
              className={`${
                dayChange >= 0 ? "green-text" : "red-text"
              } "font-bolder"`}
            >
              {dayChangePerc >= 0 ? "+" : ""}
              {dayChange}
            </p>
            <p className={dayChange >= 0 ? "green-text" : "red-text"}>
              {dayChangePerc >= 0 ? "+" : ""}({dayChangePerc}%)
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
