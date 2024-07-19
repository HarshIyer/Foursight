import { apiURL } from "@/app/components/apiURL";
import axios from "axios";
import { getCookie } from "cookies-next";
import { toast, Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import BuyPopup from "../handlers/BuyPopup";
import SellPopup from "../handlers/SellPopup";

export default function LTP(props: any) {
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
          scrip: symbol,
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
    <div className="flex flex-col mt-4">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <div className="flex flex-col md:flex-row md:items-center">
        <h1 className="font-medium text-2xl md:text-2xl mr-2">
          {" "}
          {props.companyName}
        </h1>
        <div className="hidden md:flex flex-row">
          <div>
            <Popup
              className="border border-2 rounded-xl w-[200px]"
              contentStyle={{ width: "fit-content" }}
              trigger={
                <button className="flex bg-[#037A68] py-0 px-2 text-base text-white rounded-md hover:bg-teal-800 transition transition-all-0.5s">
                  Buy
                </button>
              }
              modal
            >
              <BuyPopup companyName={props.companyName} ltp={props.ltp} />
            </Popup>
          </div>

          <div>
            <Popup
              className="border border-2 rounded-xl w-[200px]"
              contentStyle={{ width: "fit-content" }}
              trigger={
                <button className="flex bg-[#CF0000] py-0 px-2 text-base text-white rounded-md hover:bg-red-700 transition transition-all-0.5s ml-3">
                  Sell
                </button>
              }
              modal
            >
              <SellPopup companyName={props.companyName} ltp={props.ltp} />
            </Popup>
          </div>
          <button
            onClick={handleWatchlistAddition}
            className="flex border border-[#B8B8B8] bg-white py-0 px-2 text-base text-black rounded-md  ml-3"
          >
            Watch
          </button>
        </div>
      </div>
      <div className="flex flex-row items-end h-full">
        <p className="text-black text-xl md:text-xl font-medium mr-2 md:mr-3">
          ₹ {JSON.stringify(props.ltp)}
        </p>
        <p
          className={
            props.dayChange >= 0
              ? `green-text text-md md:text-md font-semibold flex mt-auto items-end justify-end h-full`
              : `red-text text-md md:text-md font-semibold flex mt-auto items-end justify-end h-full`
          }
        >
          {props.dayChange.toFixed(2)} ({props.dayChange >= 0 ? "+" : ""}
          {props.dayChangePerc.toFixed(2)}%)
        </p>
      </div>
    </div>
  );
}
