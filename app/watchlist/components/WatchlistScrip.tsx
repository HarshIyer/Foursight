import { apiURL } from "@/app/components/apiURL";
import { symbols } from "@/app/components/symbols";
import axios from "axios";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { Slide, toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

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

export default function WatchlistScrip(props: any) {
  const router = useRouter();
  const symbol = props.scrip.symbol;
  const token = getCookie("token");
  const ltp = props.scrip.ltp;
  const dayChange = props.scrip.dayChange;
  const dayChangePerc = props.scrip.dayChangePerc;
  function getCompanyName(symbol: string) {
    let companyName = "";
    symbols.forEach((scrip) => {
      if (scrip.Scrip === decodeURIComponent(symbol)) {
        companyName = scrip["Company Name"];
      }
    });
    return companyName;
  }
  let companyName = getCompanyName(symbol) || "";

  async function handleWatchlistRemoval(symbol: string) {
    let results;
    try {
      results = await axios({
        method: "post",
        url: apiURL + "/transaction/removeWatchList",
        headers: { Authorization: "Bearer " + token },
        data: {
          scrip: symbol,
        },
      });
    } catch (err: any) {
      results = err.response;
    }
    if (results.status === 200) {
      window.location.reload();
      notifySuccess("Removed " + symbol + " from watchlist");
    } else {
      notifyError("Failed to remove " + symbol + " from watchlist");
    }
  }

  return (
    <div className="">
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
      <div className="flex flex-col border border-2 border-[#E0E0E0] p-4 px-6  rounded-lg">
        <Link href={`/stocks/${encodeURIComponent(symbol)}`}>
          <div>
            <h1
              className={`${
                dayChange > 0 ? "green-text" : "red-text"
              } text-xl mb-6 font-bold  line-clamp-1`}
            >
              {companyName}
            </h1>
            <div className="flex font-semibold w-full justify-between">
              <h1>₹{ltp}</h1>
              <div className="flex flex-row">
                <h1
                  className={`${
                    dayChange > 0 ? "green-text" : "red-text"
                  } mr-1`}
                >
                  {dayChange.toFixed(2)}
                </h1>
                <h1
                  className={`${
                    dayChange > 0 ? "green-text" : "red-text"
                  } text-sm flex items-end`}
                >
                  ({dayChangePerc > 0 ? "+" : ""}
                  {dayChangePerc.toFixed(2)}%)
                </h1>
              </div>
            </div>
          </div>
        </Link>
        <div className="w-full">
          <button
            onClick={(e) => {
              handleWatchlistRemoval(symbol);
            }}
            className="font-light w-full text-center border-2 border-[#E0E0E0] hover:bg-[#ececec] transition transition-all-0.5s px-4 py-2 rounded-md mt-2"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
