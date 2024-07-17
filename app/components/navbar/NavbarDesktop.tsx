"use client";
import Link, { LinkProps } from "next/link";

import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { SlGraph } from "react-icons/sl";
import { NavTransition } from "./NavTransition";
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
interface NavTransitionProps extends LinkProps {
  children: React.ReactNode;
  className: string;
  href: string;
}

export default function NavbarDesktop() {
  const router = useRouter();
  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: string,
    href: string
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");

    body?.classList.add("page-transition-down");

    await sleep(400);
    router.push(href);
    await sleep(500);

    body?.classList.remove("page-transition");
  };

  let query = "";
  async function handleSearch(e: any) {
    e.preventDefault();
    query =
      (document.getElementById("search") as HTMLInputElement)?.value || "";
    const body = document.querySelector("body");
    handleTransition(e, query, `/search?query=${query}`);
  }
  return (
    <div className="flex  flex-col ">
      <div className="flex mt-2 items-center flex-row justify-between  text-xl">
        <div className="flex flex-row items-center">
          <SlGraph className="green-text" />
          <p className="ml-2 font-medium green-text">
            <NavTransition className="" href="/">
              Foursight
            </NavTransition>
          </p>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row items-center border border-1 border-[#C6C6C6] rounded-lg px-2 py-1">
            <form onSubmit={handleSearch}>
              <input
                id="search"
                className="border-none bg-transparent focus:border-none focus:outline-none border-none px-2 text-base rounded-lg"
                type="text"
                placeholder="Search for stocks"
              />
              <button>
                <CiSearch className="hover:green-text" />
              </button>
            </form>
          </div>
          <NavTransition href={"/signup"} className="flex">
            <button className="bg-[#037A68] py-1 px-3 text-sm text-white rounded-md  ml-3">
              Login/Register
            </button>
          </NavTransition>
        </div>
      </div>
      <hr className="w-full mt-2" />
    </div>
  );
}
