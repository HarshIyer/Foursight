"use client";
import Navbar from "@/app/components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "@/app/components/apiURL";
export default function Page({
  params,
}: {
  params: {
    symbol: string;
  };
}) {
  const symbol = params.symbol[0];
  const [stockData, setStockData] = useState({});
  useEffect(() => {
    async function getStockData() {
      let data;
      try {
        data = await axios.post(`${apiURL}/getStockQuote`, {
          symbol: symbol,
        });
      } catch (err) {
        console.error(err);
      }
      setStockData(data?.data.stockQuote);
      return data?.data.stockQuote;
    }
    getStockData();
  }, [symbol]);

  return (
    <div>
      <Navbar />
      <div>{JSON.stringify(stockData)}</div>
      <div className="mx-6">
        <h1 className="font-bold text-2xl ">{symbol}</h1>
      </div>
    </div>
  );
}
