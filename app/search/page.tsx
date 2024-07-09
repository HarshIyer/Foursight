"use client";
import { Suspense, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import TopGainers from "../components/sections/TopMovers/TopGainers";
import TopLosers from "../components/sections/TopMovers/TopLosers";
import TopVolume from "../components/sections/TopMovers/TopVolume";
import { IoIosSearch } from "react-icons/io";
import TopMovers from "../components/sections/TopMovers/TopMovers";
export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("");
  function updateQuery(e: any) {
    setQuery(e.target.value);
  }
  function search(e: any) {
    e.preventDefault();
    setSearchQuery(query);
    console.log(searchQuery);
  }
  return (
    <div>
      <Navbar />
      <div>
        <div className="w-full mx-12 my-4 flex justify-center flex-row">
          <form onSubmit={search} className="flex flex-row">
            <input
              type="text"
              className="w-fit p-4 mx-6 border border-1 border-[#858585] rounded-xl text-xl font-semibold transition transition-all-0.5s hover:border-[#037A68] focus:border-[#037A68]"
              value={query}
              onChange={updateQuery}
              placeholder="Search for stocks"
            />
            <button className="flex justify-center items-center">
              <IoIosSearch size={32} />
            </button>
          </form>
        </div>
        <div className={searchQuery !== "" ? "block" : "hidden"}>
          <h1 className="mx-8 text-2xl font-bold">
            Showing results for{" "}
            <span className="green-text">{searchQuery}</span>
          </h1>
        </div>
        <div className="mt-24">
          <TopMovers />
        </div>
      </div>
    </div>
  );
}
