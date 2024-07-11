"use client";
import { Suspense, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { symbols } from "../components/symbols";
import { IoIosSearch } from "react-icons/io";
import TopMovers from "../components/sections/TopMovers/TopMovers";
import Link from "next/link";
export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  function search(e: any) {
    e.preventDefault();
    setSearchQuery(document.getElementsByTagName("input")[0].value);
  }
  return (
    <div>
      <Navbar />
      <div>
        <div className="w-full  my-4 flex justify-center flex-row">
          <form onSubmit={search} className="flex flex-row">
            <input
              type="text"
              className="w-fit p-4 mx-2 md:mx-6 border border-1 border-[#858585] rounded-xl text-xl font-semibold transition transition-all-0.5s hover:border-[#037A68] focus:border-[#037A68]"
              placeholder="Search for stocks"
            />
            <button className="mr-2 flex justify-center items-center">
              <IoIosSearch size={32} />
            </button>
          </form>
        </div>
        <div className={searchQuery !== "" ? "block" : "hidden"}>
          <h1 className="mx-4 text-2xl font-bold">
            Showing results for{" "}
            <span className="green-text">{searchQuery}</span>
          </h1>
        </div>
        <div
          className={`p-2 flex flex-row overflow-y-scroll ${
            searchQuery.trim() == "" ? "hidden" : "block"
          }`}
        >
          {symbols.map((scrip) => {
            if (
              scrip["Company Name"]
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            ) {
              return (
                <div
                  key={scrip["Scrip"]}
                  className="p-2 border border-[#858585] mx-2 rounded-lg text-lg green-text min-w-[300px]"
                >
                  <Link
                    href={`/stocks/${encodeURIComponent(scrip["Scrip"])}`}
                    className="flex flex-col justify-between h-full"
                  >
                    <p>{scrip["Company Name"]}</p>
                    <br></br>
                    <p className="text-sm mt-2 text-black">{scrip["Scrip"]}</p>
                  </Link>
                </div>
              );
            }
          })}
        </div>

        <div className="mt-24">
          <TopMovers />
        </div>
      </div>
    </div>
  );
}
