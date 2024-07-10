"use client";
import Navbar from "@/app/components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "@/app/components/apiURL";
import { symbols } from "@/app/components/symbols";
import ScripTable from "./components/ScripTable";
import HighChart from "./components/HighChart";
import ScripTableMobile from "./components/ScripTableMobile";
import TopMoversColumn from "./components/TopMoversColumn";
export const runtime = "edge";
export default function Page({
  params,
}: {
  params: {
    symbol: string;
  };
}) {
  const symbol = params.symbol[0];
  const [stockData, setStockData] = useState({
    type: "stock",
    symbol: symbol,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    ltp: 0,
    volume: 0,
    tsInMillis: 0,
    lowPriceRange: 0.0,
    highPriceRange: 0.0,
    totalBuyQty: 0,
    totalSellQty: 0,
    dayChange: 0.0,
    dayChangePerc: 0.0,
    openInterest: null,
    lastTradeQty: 0,
    lastTradeTime: 1720515109,
    prevOpenInterest: null,
    oiDayChange: 0,
    oiDayChangePerc: 0,
    lowTradeRange: null,
    highTradeRange: null,
  });
  const [topMovers, setTopMovers] = useState({
    TOP_GAINERS: {
      items: [],
    },
    TOP_LOSERS: {
      items: [],
    },
    TOP_VOLUME: {
      items: [],
    },
  });
  useEffect(() => {
    async function getStockData() {
      let data;
      try {
        data = await axios.post(`${apiURL}/getStockQuote`, {
          symbol: btoa(decodeURIComponent(symbol)),
        });
      } catch (err) {
        console.error(err);
      }
      setStockData(data?.data.stockQuote);
      return data?.data.stockQuote;
    }
    async function getTopMoverData() {
      let data;
      try {
        data = await axios.post(`${apiURL}/topmovers`, {
          size: 10,
        });
      } catch (err) {
        console.error(err);
      }
      setTopMovers(data?.data);
      console.log(data?.data);
      return data?.data;
    }
    getTopMoverData();

    getStockData();
  }, [symbol]);
  function getCompanyName(symbol: string) {
    let companyName = "";
    symbols.forEach((scrip) => {
      if (scrip.Scrip === decodeURIComponent(params.symbol[0])) {
        companyName = scrip["Company Name"];
      }
    });
    return companyName;
  }
  let companyName = getCompanyName(symbol);
  return (
    <div>
      <Navbar />
      <div className="mx-6 my-6">
        <h1 className="font-bold text-2xl md:text-3xl "> {companyName}</h1>
        <div className="flex flex-row items-center">
          <p className="text-black text-lg md:text-xl font-medium mr-3">
            ₹ {JSON.stringify(stockData.ltp)}
          </p>
          <p
            className={
              stockData.dayChange >= 0
                ? `green-text text-md md:text-lg font-semibold flex mt-auto items-end justify-end h-full`
                : `red-text text-md md:text-lg font-semibold flex mt-auto items-end justify-end h-full`
            }
          >
            {stockData.dayChange.toFixed(2)} (
            {stockData.dayChange >= 0 ? "+" : ""}
            {stockData.dayChangePerc.toFixed(2)}%)
          </p>
        </div>
        <div className="flex justify-between mr-4 flex-col lg:flex-row ">
          <div className="md:w-[60%] ">
            <div className="w-full ">
              <HighChart symbol={params.symbol} />
            </div>
            <div className="mt-4">
              <div className={`hidden md:block`}>
                <ScripTable
                  open={stockData.open}
                  close={stockData.close}
                  ltp={stockData.ltp}
                  high={stockData.high}
                  low={stockData.low}
                  volume={stockData.volume}
                  tsInMillis={stockData.tsInMillis}
                  lowPriceRange={stockData.lowPriceRange}
                  highPriceRange={stockData.highPriceRange}
                  totalBuyQty={stockData.totalBuyQty}
                  totalSellQty={stockData.totalSellQty}
                  lastTradeQty={stockData.lastTradeQty}
                  lastTradeTime={stockData.lastTradeTime}
                  oiDayChange={stockData.oiDayChange}
                  oiDayChangePerc={stockData.oiDayChangePerc}
                  lowTradeRange={stockData.lowTradeRange}
                  highTradeRange={stockData.highTradeRange}
                />
              </div>
              <div className={`block md:hidden`}>
                <ScripTableMobile
                  open={stockData.open}
                  close={stockData.close}
                  ltp={stockData.ltp}
                  high={stockData.high}
                  low={stockData.low}
                  volume={stockData.volume}
                  tsInMillis={stockData.tsInMillis}
                  lowPriceRange={stockData.lowPriceRange}
                  highPriceRange={stockData.highPriceRange}
                  totalBuyQty={stockData.totalBuyQty}
                  totalSellQty={stockData.totalSellQty}
                  lastTradeQty={stockData.lastTradeQty}
                  lastTradeTime={stockData.lastTradeTime}
                  oiDayChange={stockData.oiDayChange}
                  oiDayChangePerc={stockData.oiDayChangePerc}
                  lowTradeRange={stockData.lowTradeRange}
                  highTradeRange={stockData.highTradeRange}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-12">
            <div className="flex justify-center">
              <TopMoversColumn data={topMovers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
