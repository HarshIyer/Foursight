import { apiURL } from "@/app/components/apiURL";
import axios from "axios";
import { getCookie } from "cookies-next";
import { toast, Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import BuyPopup from "../handlers/BuyPopup";
import SellPopup from "../handlers/SellPopup";
import BuySellWatch from "./BuySellWatch";

export default function LTP(props: any) {
  return (
    <div>
      <div className="flex  flex-col mt-4">
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
          <div className="flex flex-col">
            <div className="flex flex-row">
              <h1 className="font-medium mr-4 break-words sm:truncate  text-xl md:text-2xl">
                {props.companyName}
              </h1>
              <div className="hidden md:block">
                <BuySellWatch
                  companyName={props.companyName}
                  symbol={props.symbol}
                  ltp={props.ltp}
                />
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
        </div>
      </div>
    </div>
  );
}
