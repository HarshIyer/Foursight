"use client";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import TopMovers from "../components/sections/TopMovers/TopMovers";
import { useSearchParams } from "next/navigation";
import { symbols } from "../components/symbols";
import { Suspense } from "react";
function StocksPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  return (
    <Suspense>
      <div className="md:mx-[15%]">
        <Navbar />
        <div className="md:mt-4 mx-6 md:mx-0">
          <div className="flex flex-row">
            <p className="text-xs text-[#1E1E1E] font-light mr-2 ">
              <Link className="hover:underline" href={"/"}>
                {" "}
                Home
              </Link>{" "}
              &gt;{" "}
            </p>
            <p className="text-xs text-[#1E1E1E] font-light mr-2"> Stocks</p>
          </div>
          <div className="mb-8">
            <div className={searchQuery !== "" ? "block" : "hidden"}>
              <h1 className=" text-2xl font-bold mt-4">
                Showing results for{" "}
                <span className="green-text">{searchQuery}</span>
              </h1>
            </div>
            <div
              className={`mt-2 flex flex-row overflow-y-scroll ${
                searchQuery.trim() == "" ? "hidden" : "block"
              }`}
            >
              {symbols.map((scrip) => {
                if (
                  scrip["Company Name"]
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  scrip["Scrip"]
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                ) {
                  return (
                    <div
                      key={scrip["Scrip"]}
                      className="mb-2 hover:border-teal-600 transition transition-all-0.5s p-2 border border-[#858585] mr-2 rounded-lg text-lg green-text min-w-[240px]"
                    >
                      <Link
                        href={`/stocks/${encodeURIComponent(scrip["Scrip"])}`}
                        className="flex flex-col justify-between h-full"
                      >
                        <p className="font-semibold">{scrip["Company Name"]}</p>
                        <br></br>
                        <p className="text-sm mt-2 text-black">
                          {scrip["Scrip"]}
                        </p>
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div>
            <TopMovers />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
export default function Stocks() {
  return (
    <Suspense>
      <StocksPage />
    </Suspense>
  );
}
