"use client";
import TopMovers from "../components/sections/TopMovers/TopMovers";
import Navbar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import parseJwt from "../components/navbar/utils/parseJwt";
import { getCookie } from "cookies-next";
import { NavTransition } from "../components/navbar/NavTransition";
import marketCap from "./handlers/marketCap";
import getIndices from "./handlers/indices";
import getNews from "./handlers/news";
import IndicesSection from "./sections/IndicesSection";
import NewsSection from "./sections/NewsSection";
import TopMoversSection from "./sections/TopMoversSection";
import getTopMovers from "./handlers/topMovers";
import TopMarketCap from "./components/TopMarketCap";
import RouterComponent from "../components/RouterComponent";

export default function DashboardPage() {
  let token = getCookie("token");
  const [username, setUsername] = useState("");
  const [marketCapData, setMarketCapData] = useState([]);
  const [indicesData, setIndicesData] = useState({});
  const [news, setNews] = useState([]);
  const [topMovers, setTopMovers] = useState([]);
  useEffect(() => {
    let tokenContents;
    if (token) {
      tokenContents = parseJwt(token);
    }
    setUsername(tokenContents.username);

    async function declareVariables() {
      let marketCapData, indicesData, topMoversData, news;
      try {
        marketCapData = await marketCap();
        indicesData = await getIndices();
        topMoversData = await getTopMovers();
        // news = await getNews();
      } catch (err) {
        console.error(err);
      }
      setMarketCapData(marketCapData?.data);
      setIndicesData(indicesData?.data);
      setTopMovers(topMoversData?.data);
      // setNews(news?.data);
    }
    declareVariables();
  }, [token]);

  return (
    <div className="flex flex-col md:mx-[15%] ">
      <Navbar logStatus={true} />
      <div className="mt-4 mb-8 mx-6 md:mx-0">
        <div>
          <RouterComponent />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-[70%] ">
            <div className="mt-4 text-xl font-semibold mb-2">
              Welcome back,<span className="green-text"> {username}!</span>
            </div>

            <div className="flex flex-col ">
              <IndicesSection data={indicesData} />
              <TopMoversSection data={topMovers} />
              <TopMarketCap data={marketCapData} />
            </div>
          </div>
          <div className="ml-8">{/* <NewsSection data={news} /> */}</div>
        </div>
      </div>
    </div>
  );
}
