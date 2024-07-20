"use client";
import TopMovers from "../components/sections/TopMovers/TopMovers";
import Navbar from "../components/navbar/Navbar";
import { use, useEffect, useState } from "react";
import parseJwt from "../components/navbar/utils/parseJwt";
import { getCookie } from "cookies-next";
export default function DashboardPage() {
  let token = getCookie("token");
  const [username, setUsername] = useState("");
  useEffect(() => {
    let tokenContents;
    if (token) {
      tokenContents = parseJwt(token);
    }
    setUsername(tokenContents.username);
  }, [token]);

  return (
    <div className="flex flex-col md:mx-[15%]">
      <Navbar logStatus={true} />
      <div className="mx-6 ">
        <div className=" text-6xl my-12 font-extrabold">
          <h1>
            Hello, <span className="green-text">{username}</span>
          </h1>
        </div>
        <div>
          {/* <Watchlist /> */}
          <TopMovers />
        </div>
      </div>
    </div>
  );
}
