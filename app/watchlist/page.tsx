"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import WatchlistScrip from "./components/WatchlistScrip";
import { apiURL } from "../components/apiURL";
import axios from "axios";
import { getCookie } from "cookies-next";
export default function WatchlistPage() {
  const [watchlistData, setWatchlistData] = useState([]);
  const [display, setDisplay] = useState(false);

  function isEmpty(obj: Object) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }

    return true;
  }

  useEffect(() => {
    const token = getCookie("token");
    async function getWatchListData() {
      let data;
      try {
        data = await axios({
          method: "post",
          url: apiURL + "/getWatchList",
          headers: { Authorization: "Bearer " + token },
        });
      } catch (err) {
        console.error(err);
      }
      setWatchlistData(data?.data);
      return data?.data;
    }

    getWatchListData();
  }, [watchlistData]);

  return (
    <div className="md:mx-[15%] ">
      <Navbar />
      <div className="my-8 mx-6 md:mx-0">
        <div className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {Object.keys(watchlistData).map((key: any) => {
            const scrip = watchlistData[key];
            return <WatchlistScrip key={key} scrip={scrip} />;
          })}
        </div>
      </div>
    </div>
  );
}
