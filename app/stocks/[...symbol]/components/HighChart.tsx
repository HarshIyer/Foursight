import { use, useEffect, useState, useRef, Suspense } from "react";
import DailyChart from "./charts/DailyChart";
import axios from "axios";
import { apiURL } from "@/app/components/apiURL";
import WeeklyChart from "./charts/WeeklyChart";
import MonthlyChart from "./charts/MonthlyChart";
import YearlyChart from "./charts/YearlyChart";

export default function HighChart(props: any) {
  const symbol = props.symbol;
  const [display, setDisplay] = useState("DAILY");
  const [dailyCandlesData, setDailyCandlesData] = useState([]);
  const [weeklyCandlesData, setWeeklyCandlesData] = useState([]);
  const [monthlyCandlesData, setMonthlyCandlesData] = useState([]);
  const [yearlyCandlesData, setYearlyCandlesData] = useState([]);

  useEffect(() => {
    async function getDailyCandlesData() {
      let data;
      try {
        data = await axios.post(`${apiURL}/getCandles`, {
          symbol: btoa(symbol),
        });
      } catch (err) {
        console.error(err);
      }
      setDailyCandlesData(data?.data.dailyCandles.data.candles);
      setWeeklyCandlesData(data?.data.weeklyCandles.data.candles);
      setMonthlyCandlesData(data?.data.monthlyCandles.data.candles);
      setYearlyCandlesData(data?.data.yearlyCandles.data.candles);
    }
    getDailyCandlesData();
  }, [symbol]);

  return (
    <div>
      <div>
        {display === "DAILY" && <DailyChart data={dailyCandlesData} />}
        {display === "WEEKLY" && <WeeklyChart data={weeklyCandlesData} />}
        {display === "MONTHLY" && <MonthlyChart data={monthlyCandlesData} />}
        {display === "YEARLY" && <YearlyChart data={yearlyCandlesData} />}
        <div className="flex flex-row justify-center">
          <button
            className={`p-1 px-2 mx-2  rounded-2xl ${
              display == "DAILY"
                ? "bg-white text-black border border-2 border-[#037a68]"
                : "border border-2 border-[#858585]"
            } `}
            onClick={() => setDisplay("DAILY")}
          >
            1D
          </button>
          <button
            className={`p-1 px-2 mx-2  rounded-2xl ${
              display == "WEEKLY"
                ? "bg-white text-black border border-2 border-[#037a68]"
                : "border border-2 border-[#858585]"
            } `}
            onClick={() => setDisplay("WEEKLY")}
          >
            1W
          </button>
          <button
            className={`p-1 px-2 mx-2  rounded-2xl ${
              display == "MONTHLY"
                ? "bg-white text-black border border-2 border-[#037a68]"
                : "border border-2 border-[#858585]"
            } `}
            onClick={() => setDisplay("MONTHLY")}
          >
            1M
          </button>
          <button
            className={`p-1 px-2 mx-2  rounded-2xl ${
              display == "YEARLY"
                ? "bg-white text-black border border-2 border-[#037a68]"
                : "border border-2 border-[#858585]"
            } `}
            onClick={() => setDisplay("YEARLY")}
          >
            1Y
          </button>
        </div>
      </div>
    </div>
  );
}
