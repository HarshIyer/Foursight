"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { apiURL } from "../../apiURL";
import TopGainers from "./TopGainers";
import TopLosers from "./TopLosers";
import TopVolume from "./TopVolume";

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

  useEffect(() => {
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
      return data?.data;
    }
    getTopMoverData();
  }, []);
  return (
    <div className="flex flex-col">
      {topMovers.TOP_GAINERS && (
        <TopGainers type="Gainers" apiData={topMovers.TOP_GAINERS.items} />
      )}
      {topMovers.TOP_GAINERS && (
        <TopLosers type="Losers" apiData={topMovers.TOP_LOSERS.items} />
      )}
      {topMovers.TOP_VOLUME && (
        <TopVolume type="Volume" apiData={topMovers.TOP_VOLUME.items} />
      )}
    </div>
  );
}
