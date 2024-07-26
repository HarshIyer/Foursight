"use client";
import Navbar from "@/app/components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "@/app/components/apiURL";
import { symbols } from "@/app/components/symbols";
import HighChart from "./components/HighChart";
import TopMoversColumn from "./components/TopMoversColumn";
import Link from "next/link";
import LTP from "./components/sections/LTP";
import Stats from "./components/sections/Statistics/Stats";
import BuySellWatch from "./components/sections/BuySellWatch";
import Loading from "@/app/components/Loading";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getStockData() {
      let data;
      try {
        data = await axios.post(`${apiURL}/getStockQuote`, {
          symbol: btoa(decodeURIComponent(symbol)),
        });
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
      setStockData(data?.data.stockQuote);
      return data?.data;
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
      return data?.data.stockQuote;
    }
    getStockData();
    getTopMoverData();
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
    <div className="md:mx-[15%]">
      <div>
        <Navbar />
      </div>
      <div className="md:mt-4 mx-6 md:mx-0">
        <div className="flex flex-row">
          <p className="text-xs text-[#1E1E1E] font-light mr-2 ">
            <Link className="hover:underline" href={"/"}>
              {" "}
              Home
            </Link>{" "}
            &gt;{" "}
          </p>
          <p className="text-xs text-[#1E1E1E] font-light mr-2">
            <Link className="hover:underline" href={"/stocks"}>
              {" "}
              Stocks
            </Link>{" "}
            &gt;{" "}
          </p>
          <p className="line-clamp-1 text-xs text-[#1E1E1E] font-light mr-2">
            {symbol}
          </p>
        </div>
        <div className="flex w-full md:flex-row justify-between">
          <div className="xl:w-[60%]">
            <div>
              {loading ? (
                <div className="w-full h-full flex justify-center items-center">
                  <Loading />
                </div>
              ) : (
                <LTP
                  symbol={symbol}
                  ltp={stockData.ltp}
                  dayChange={stockData.dayChange}
                  dayChangePerc={stockData.dayChangePerc}
                  companyName={companyName}
                />
              )}
            </div>
            <div className="mt-6">
              <div className="md:w-full">
                <HighChart symbol={params.symbol} />
              </div>
            </div>
            <div className="my-6 w-full flex justify-center md:hidden">
              <BuySellWatch
                symbol={symbol}
                companyName={companyName}
                ltp={stockData.ltp}
              />
            </div>
            <div className="mt-6">
              {loading ? (
                <div className="w-full h-full flex justify-center items-center">
                  <Loading />
                </div>
              ) : (
                <Stats
                  symbol={symbol}
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
                  dayChange={stockData.dayChange}
                  dayChangePerc={stockData.dayChangePerc}
                  oiDayChange={stockData.oiDayChange}
                  oiDayChangePerc={stockData.oiDayChangePerc}
                  lowTradeRange={stockData.lowTradeRange}
                  highTradeRange={stockData.highTradeRange}
                />
              )}
            </div>
          </div>
          <div className="hidden  grow xl:flex flex-row justify-end">
            <div className="flex mb-auto ml-auto">
              {loading ? (
                <div className="w-full h-full flex justify-center items-center">
                  <Loading />
                </div>
              ) : (
                <TopMoversColumn data={topMovers} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
