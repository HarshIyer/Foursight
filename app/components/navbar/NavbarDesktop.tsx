"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { SlGraph } from "react-icons/sl";

export default function NavbarDesktop() {
  const router = useRouter();
  let query = "";
  function handleSearch(e: any) {
    e.preventDefault();
    query =
      (document.getElementById("search") as HTMLInputElement)?.value || "";
    console.log(query);
    router.push(`/stocks?search=${query}`);
  }
  return (
    <div className="flex bg-white flex-col ">
      <div className="flex mt-2 items-center flex-row justify-between  text-xl">
        <div className="flex flex-row items-center">
          <SlGraph className="green-text" />
          <p className="ml-2 font-medium green-text">
            <Link href="/">Foursight</Link>
          </p>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row items-center border border-1 border-[#C6C6C6] rounded-lg px-2 py-1">
            <form onSubmit={handleSearch}>
              <input
                id="search"
                className="border-none focus:border-none focus:outline-none border-none px-2 text-base rounded-lg"
                type="text"
                placeholder="Search for stocks"
              />
              <button>
                <CiSearch className="hover:green-text" />
              </button>
            </form>
          </div>
          <Link href={"/signup"} className="flex">
            <button className="bg-[#037A68] py-1 px-3 text-sm text-white rounded-md  ml-3">
              Login/Register
            </button>
          </Link>
        </div>
      </div>
      <hr className="w-full mt-2" />
    </div>
  );
}
