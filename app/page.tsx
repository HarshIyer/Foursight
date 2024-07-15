"use client";
import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import TopMovers from "./components/sections/TopMovers/TopMovers";

export default function Home() {
  function hydrate() {}

  useEffect(() => {
    hydrate();
  }, []);

  setInterval(hydrate, 10000);

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
