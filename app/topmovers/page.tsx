"use client";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import TopGainers from "./components/sections/TopGainers";
import TopLosers from "./components/sections/TopLosers";
import TopVolume from "./components/sections/TopVolume";

export default function TopMovers() {
  const [display, setDisplay] = useState("Gainers");
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-4">
        <div className="p-4 flex bg-[#DFDFDF] flex-row justify-center w-fit rounded-xl">
          <button onClick={() => setDisplay("Gainers")}>
            <div className="p-2 bg-white mx-2 rounded-xl text-xl border border-1 border-[#858585] px-6 font-semibold green-text">
              Gainers
            </div>
          </button>
          <button onClick={() => setDisplay("Losers")}>
            <div className="p-2 bg-white mx-2 rounded-xl text-xl border border-1 border-[#858585] px-6 font-semibold red-text">
              Losers
            </div>
          </button>
          <button onClick={() => setDisplay("Movers")}>
            <div className="p-2 bg-white mx-2 rounded-xl text-xl border border-1 border-[#858585] px-6 font-semibold">
              Movers
            </div>
          </button>
        </div>
      </div>
      <div>
        {display === "Gainers" ? (
          <TopGainers />
        ) : display === "Losers" ? (
          <TopLosers />
        ) : (
          <TopVolume />
        )}
      </div>
    </div>
  );
}
