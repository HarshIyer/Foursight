import { useState } from "react";
import TopMoverComponent from "../components/TopMoverComponent";

export default function TopGainers(props: any) {
  const { data } = props;
  const large = data?.LARGECAP.items ? data.LARGECAP.items : [];
  const medium = data?.MIDCAP.items ? data.MIDCAP.items : [];
  const small = data?.SMALLCAP.items ? data.SMALLCAP.items : [];
  const [display, setDisplay] = useState("LARGECAP");
  const buttonClass =
    "  text-gray-500  text-sm  px-2 rounded-md mr-2 transition transition-all-0.5s";
  return (
    <div>
      <div className="mt-1 mb-2">
        <button
          onClick={(evt) => {
            setDisplay("LARGECAP");
          }}
          className={` ${buttonClass} ${display === "LARGECAP" ? "bg-teal-600 text-white" : "bg-white border-[1px] border-[#696969]"}  `}
        >
          Large
        </button>
        <button
          onClick={(evt) => {
            setDisplay("MIDCAP");
          }}
          className={` ${buttonClass} ${display === "MIDCAP" ? "bg-teal-600 text-white" : "bg-white border-[1px] border-[#696969]"}  `}
        >
          Mid
        </button>
        <button
          onClick={(evt) => {
            setDisplay("SMALLCAP");
          }}
          className={` ${buttonClass} ${display === "SMALLCAP" ? "bg-teal-600 text-white" : "bg-white border-[1px] border-[#696969]"}  `}
        >
          Small
        </button>
      </div>
      {display === "LARGECAP" && (
        <div className="flex flex-row overflow-y-scroll">
          {large.map((item: any, index: number) => {
            return (
              <div key={index}>
                <TopMoverComponent
                  companyName={item.company.companyName}
                  ltp={item.stats.ltp}
                  dayChange={item.stats.dayChange}
                  dayChangePerc={item.stats.dayChangePerc}
                  symbol={item.company.nseScriptCode}
                />
              </div>
            );
          })}
        </div>
      )}
      {display === "MIDCAP" && (
        <div className="flex flex-row overflow-y-scroll">
          {medium.map((item: any, index: number) => {
            return (
              <div key={index}>
                <TopMoverComponent
                  companyName={item.company.companyName}
                  ltp={item.stats.ltp}
                  dayChange={item.stats.dayChange}
                  dayChangePerc={item.stats.dayChangePerc}
                  symbol={item.company.nseScriptCode}
                />
              </div>
            );
          })}
        </div>
      )}
      {display === "SMALLCAP" && (
        <div className="flex flex-row overflow-y-scroll">
          {small.map((item: any, index: number) => {
            return (
              <div key={index}>
                <TopMoverComponent
                  companyName={item.company.companyName}
                  ltp={item.stats.ltp}
                  dayChange={item.stats.dayChange}
                  dayChangePerc={item.stats.dayChangePerc}
                  symbol={item.company.nseScriptCode}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
