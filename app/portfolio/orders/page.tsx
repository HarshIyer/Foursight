"use client";
import { apiURL } from "@/app/components/apiURL";
import Navbar from "@/app/components/navbar/Navbar";
import { NavTransition } from "@/app/components/navbar/NavTransition";
import parseJwt from "@/app/components/navbar/utils/parseJwt";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useState, useEffect } from "react";

export default function OrderPage() {
  let token = getCookie("token");
  const [details, setDetails] = useState([]);
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
        setDetails(results.data.orderBook.reverse());
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
              <NavTransition className="hover:underline" href={"/portfolio"}>
                {" "}
                Portfolio{"  "}
              </NavTransition>
              &gt;
            </p>
            <p className="text-xs text-[#1E1E1E] font-light mr-2">
              Order Book{" "}
            </p>
          </div>
          <div className="w-full overflow-x-scroll">
            <table className="border-separate border-spacing-x-2 border-spacing-y-4 md:border-spacing-2 w-full text-sm text-center">
              <thead>
                <tr className=" font-semibold text-gray-500 border-separate border-spacing-5">
                  <td className="text-start ">SCRIP</td>
                  <td>QUANTITY</td>
                  <td>PRICE</td>
                  <td>TYPE</td>
                  <td>DATE</td>
                  <td>TIME</td>
                </tr>
                <tr>
                  <td colSpan={6}>
                    <hr />
                  </td>
                </tr>
              </thead>
              <tbody>
                {details.map((order: any) => {
                  return (
                    <tr key={order.scrip}>
                      <td className="text-start font-semibold">
                        <NavTransition
                          className=""
                          href={`/stocks/${encodeURIComponent(order.scrip)}`}
                        >
                          {order.scrip}{" "}
                        </NavTransition>
                      </td>
                      <td className="text-gray-600 font-semibold">
                        {order.quantity}
                      </td>
                      <td
                        className={`green-text font-semibold ${order.type === "SELL" ? "red-text" : "green-text"}`}
                      >
                        ₹{order.price.toFixed(1)}
                      </td>
                      <td
                        className={` font-semibold ${order.type === "SELL" ? "red-text" : "green-text"}`}
                      >
                        {order.type}
                      </td>{" "}
                      <td className="text-gray-600 font-semibold">
                        {new Date(order.time).toLocaleDateString()}
                      </td>
                      <td className="text-gray-600 font-semibold">
                        {new Date(order.time).toLocaleTimeString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
