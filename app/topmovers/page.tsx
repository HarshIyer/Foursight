"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import TopGainers from "./components/sections/TopGainers";
import TopLosers from "./components/sections/TopLosers";
import TopVolume from "./components/sections/TopVolume";
import axios from "axios";
import { apiURL } from "../components/apiURL";
import { NavTransition } from "../components/navbar/NavTransition";
import Loading from "../components/Loading";

export default function TopMovers() {
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
    async function getTopMoverData() {
      let data;
      try {
        data = await axios.post(`${apiURL}/topmovers`, {
          size: 10,
        });
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
      setTopMovers(data?.data);
      return data?.data;
    }
    getTopMoverData();
  }, []);
  const [display, setDisplay] = useState("Gainers");

  return (
    <div className="md:mx-[15%]">
      <Navbar />
      <div className="flex flex-col justify-start mt-4 mx-6 md:mx-0">
        <div className="flex flex-row mb-4">
          <p className="text-xs text-[#1E1E1E] font-light mr-2 ">
            <NavTransition className="hover:underline" href={"/"}>
              {" "}
              Home
            </NavTransition>{" "}
            &gt;{" "}
          </p>
          <p className="text-xs text-[#1E1E1E] font-light mr-2"> Top Movers</p>
        </div>
        <div>
          <div className="flex text-sm md:text-base flex-row">
            <button
              className={`pr-1  mr-2  ${
                display == "Gainers"
                  ? "underline green-text decoration-4 underline-offset-8  text-black "
                  : ""
              }`}
              onClick={() => setDisplay("Gainers")}
            >
              Gainers
            </button>
            <button
              className={`p-1  mx-2   ${
                display == "Losers"
                  ? "underline red-text decoration-4 underline-offset-8  text-black "
                  : ""
              }`}
              onClick={() => setDisplay("Losers")}
            >
              Losers
            </button>
            <button
              className={`p-1  mx-2   ${
                display == "Volume"
                  ? "underline  decoration-4 underline-offset-8  text-black "
                  : ""
              }`}
              onClick={() => setDisplay("Volume")}
            >
              Volume
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <div className=" w-full h-full flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="mx-6 md:mx-0 mt-8">
          {display === "Gainers" ? (
            <TopGainers type="Gainers" apiData={topMovers.TOP_GAINERS.items} />
          ) : display === "Losers" ? (
            <TopLosers type="Losers" apiData={topMovers.TOP_LOSERS.items} />
          ) : (
            <TopVolume type="Volume" apiData={topMovers.TOP_VOLUME.items} />
          )}
        </div>
      )}
    </div>
  );
}
