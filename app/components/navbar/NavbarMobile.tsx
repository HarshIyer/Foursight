/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { NavTransition } from "./NavTransition";
import Hamburger from "./utils/Hamburger";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

const NavbarMobile = (props: any) => {
  const router = useRouter();
  const [logStatus, setLogStatus] = useState(false);
  function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: string,
    href: string,
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");

    body?.classList.add("page-transition-down");

    await sleep(400);
    router.push(href);
    await sleep(500);

    body?.classList.remove("page-transition");
  };
  const [query, setQuery] = useState("");

  async function handleSearch(e: any) {
    e.preventDefault();
    const body = document.querySelector("body");
    handleTransition(e, query, `/stocks?search=${query}`);
  }

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      setLogStatus(true);
    } else {
      setLogStatus(false);
    }
  }, [logStatus]);

  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="my-4 mx-6  text-xl">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <img src="/FoursightLogo.png" alt="Foursight Logo" className="h-8" />
          <p className="ml-2 font-medium green-text">
            <NavTransition className="" href="/">
              Foursight
            </NavTransition>
          </p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="mr-2">
            <button onClick={handleButtonClick}>
              <CiSearch className="text-[#037A68] cursor-pointer" />
            </button>
          </div>
          {!logStatus && (
            <NavTransition
              href={logStatus ? "/logout" : "/signup"}
              className="flex "
            >
              <button className="bg-[#037A68] flex items-center justify-center py-1 px-2 text-sm text-white rounded-md  ml-3">
                Login/Register
              </button>
            </NavTransition>
          )}
          {logStatus && <Hamburger />}
        </div>
      </div>
      <div
        className={`search-bar my-2  flex flex-row   border border-1 border-[#C6C6C6] hover:border-[#858585] transition transition-all-0.5s rounded-lg px-2 py-2 ${isVisible ? "animate-in" : ""}`}
      >
        <form
          className="flex flex-row w-full justify-between"
          onSubmit={handleSearch}
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full flex bg-transparent focus:border-none focus:outline-none border-none px-2 text-base rounded-lg"
            type="text"
            placeholder="Search for stocks"
          />
          <button className="my-auto">
            <CiSearch className="hover:green-text" />
          </button>
        </form>
      </div>
      <hr className="w-full mt-2" />
    </div>
  );
};

export default NavbarMobile;
