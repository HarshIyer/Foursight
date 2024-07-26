import Popup from "reactjs-popup";
import BuyPopup from "../handlers/BuyPopup";
import SellPopup from "../handlers/SellPopup";
import { apiURL } from "@/app/components/apiURL";
import axios from "axios";
import { toast, Slide } from "react-toastify";
import { getCookie } from "cookies-next";
import { useState } from "react";

export default function BuySellWatch(props: any) {
  let symbol = props.symbol || "";
  let token = getCookie("token");

  const notifySuccess = (message: string) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  const notifyError = (message: string) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  async function handleWatchlistAddition() {
    let results;
    try {
      results = await axios({
        method: "post",
        url: apiURL + "/transaction/addWatchlist",
        headers: { Authorization: "Bearer " + token },
        data: {
          scrip: decodeURIComponent(symbol),
        },
      });
    } catch (err: any) {
      results = err.response;
    }
    if (results?.status === 200) {
      notifySuccess("Added to watchlist");
    }
    if (results?.status === 409) {
      notifyError("Already in watchlist!");
    }
  }
  return (
    <div className="flex md:flex flex-row">
      <div>
        <Popup
          className=" border-2 rounded-xl w-[200px]"
          contentStyle={{
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
            margin: "12px",
            marginTop: "auto",
            marginBottom: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          trigger={
            <button className="flex bg-[#037A68] py-0 px-2 text-base text-white rounded-md hover:bg-teal-800 transition transition-all-0.5s">
              Buy
            </button>
          }
          modal
        >
          <BuyPopup
            companyName={props.companyName}
            symbol={decodeURIComponent(props.symbol)}
            ltp={props.ltp}
          />
        </Popup>
      </div>

      <div>
        <Popup
          className=" border-2 rounded-xl w-[200px]"
          contentStyle={{
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
            margin: "12px",
            marginTop: "auto",
            marginBottom: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          trigger={
            <button className="flex bg-[#CF0000] py-0 px-2 text-base text-white rounded-md hover:bg-red-700 transition transition-all-0.5s ml-3">
              Sell
            </button>
          }
          modal
        >
          <SellPopup
            companyName={props.companyName}
            symbol={decodeURIComponent(props.symbol)}
            ltp={props.ltp}
          />
        </Popup>
      </div>
      <button
        onClick={handleWatchlistAddition}
        className="flex h-fit border border-[#B8B8B8] bg-white py-0 px-2 text-base text-black rounded-md  ml-3"
      >
        Watch
      </button>
    </div>
  );
}
