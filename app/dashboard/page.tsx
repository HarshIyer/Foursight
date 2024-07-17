"use client";
import TopMovers from "../components/sections/TopMovers/TopMovers";
import Navbar from "../components/navbar/Navbar";
import { useEffect } from "react";
export default function DashboardPage() {
  return (
    <div className="flex flex-col md:mx-[15%]">
      <Navbar />
      <div className="text-6xl my-12 font-extrabold">
        <h1>
          Hello, <span className="green-text">Harsh</span>
        </h1>
      </div>
      <div>
        {/* <Watchlist /> */}
        <TopMovers />
      </div>
    </div>
  );
}
