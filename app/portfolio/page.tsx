"use client";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useState, useEffect } from "react";
import { apiURL } from "../components/apiURL";
import Navbar from "../components/navbar/Navbar";
import { NavTransition } from "../components/navbar/NavTransition";
import parseJwt from "../components/navbar/utils/parseJwt";
import Networth from "./sections/Networth";

export default function PortfolioPage() {
  let token = getCookie("token");
  const [details, setDetails] = useState({});
  useEffect(() => {
    let tokenContents;
    if (token) {
      tokenContents = parseJwt(token);
    }

    async function getNetworth() {
      let results;
      try {
        results = await axios({
          method: "post",
          url: apiURL + "/auth/getAccountDetails",
          headers: { Authorization: "Bearer " + token },
        });
        setDetails(results.data);
      } catch (err) {
        console.error(err);
      }
    }
    getNetworth();
  }, [token]);
  return (
    <div>
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
            <p className="text-xs text-[#1E1E1E] font-light mr-2">
              {" "}
              Portfolio{" "}
            </p>
          </div>
          <div>
            <Networth data={details} />
          </div>
        </div>
      </div>
    </div>
  );
}
