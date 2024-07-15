import { useState } from "react";
import Overview from "./Overview";
import Financials from "./Financials";
import Competitors from "./Competitors";
import Statistics from "./Statistics";

export default function Stats(props: any) {
  const [display, setDisplay] = useState("OVERVIEW");
  return (
    <div>
      <div className="flex text-sm md:text-base flex-row">
        <button
          className={`pr-1  mr-2  ${
            display == "OVERVIEW"
              ? "underline green-text decoration-4 underline-offset-8 bg-white text-black "
              : ""
          }`}
          onClick={() => setDisplay("OVERVIEW")}
        >
          Overview
        </button>
        <button
          className={`p-1  mx-2   ${
            display == "STATISTICS"
              ? "underline green-text decoration-4 underline-offset-8 bg-white text-black "
              : ""
          }`}
          onClick={() => setDisplay("STATISTICS")}
        >
          Statistics
        </button>
        <button
          className={`p-1  mx-2   ${
            display == "FINANCIALS"
              ? "underline green-text decoration-4 underline-offset-8 bg-white text-black "
              : ""
          }`}
          onClick={() => setDisplay("FINANCIALS")}
        >
          Financials
        </button>
        <button
          className={`p-1 mx-2   ${
            display == "COMPETITORS"
              ? "underline green-text decoration-4 underline-offset-8 bg-white text-black "
              : ""
          }`}
          onClick={() => setDisplay("COMPETITORS")}
        >
          Competitors
        </button>
      </div>
      <div className="mt-4">
        {display === "OVERVIEW" && (
          <div>
            <Overview {...props} />
          </div>
        )}
        {display === "STATISTICS" && (
          <div>
            <Statistics {...props} />
          </div>
        )}
        {display === "FINANCIALS" && (
          <div>
            <Financials {...props} />
          </div>
        )}
        {display === "COMPETITORS" && (
          <div>
            <Competitors {...props} />
          </div>
        )}
      </div>
    </div>
  );
}
