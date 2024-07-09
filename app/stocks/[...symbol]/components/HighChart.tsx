import { use, useEffect, useState, useRef } from "react";
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
          symbol: symbol,
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
            className={`p-1 px-2 mx-2  rounded-lg ${
              display == "DAILY"
                ? "bg-[#037a68] text-white"
                : "border border-2 border-[#858585]"
            } `}
            onClick={() => setDisplay("DAILY")}
          >
            Daily
          </button>
          <button
            className={`p-1 px-2 mx-2   rounded-lg ${
              display == "WEEKLY"
                ? "bg-[#037a68] text-white"
                : "border border-2 border-[#858585]"
            }`}
            onClick={() => setDisplay("WEEKLY")}
          >
            Weekly
          </button>
          <button
            className={`p-1 px-2 mx-2  rounded-lg ${
              display == "MONTHLY"
                ? "bg-[#037a68] text-white"
                : "border border-2 border-[#858585]"
            }`}
            onClick={() => setDisplay("MONTHLY")}
          >
            Monthly
          </button>
          <button
            className={`p-1 px-2 mx-2  rounded-lg ${
              display == "YEARLY"
                ? "bg-[#037a68] text-white"
                : "border border-2 border-[#858585]"
            }`}
            onClick={() => setDisplay("YEARLY")}
          >
            Yearly
          </button>
        </div>
      </div>
    </div>
  );
}
