"use client";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import NavbarItem from "./NavbarItem";
import { CiAlignTop } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { FaGlasses } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { NavTransition } from "./NavTransition";
import Hamburger from "./utils/Hamburger";
import { getCookie } from "cookies-next";
const NavbarMobile = (props: any) => {
  const [display, setDisplay] = useState(false);
  const [logStatus, setLogStatus] = useState(false);

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      setLogStatus(true);
    } else {
      setLogStatus(false);
    }
  }, [logStatus]);

  return (
    <div className="my-4 mx-6  text-xl">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <SlGraph className="green-text" />
          <p className="ml-2 font-medium green-text">
            <NavTransition className="" href="/">
              Foursight
            </NavTransition>
          </p>
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
      <hr className="w-full mt-2" />
    </div>
  );
};

export default NavbarMobile;

{
  /*
  <button
        className=" md:text-xl font-bold mx-2 flex text-center items-center px-[16px] py-[16px]  rounded-xl mt-2"
        onClick={toggleDisplay}
      >
        {display ? (
          <IoMdClose className="green-text text-xl" />
        ) : (
          <GiHamburgerMenu className="green-text text-xl" />
        )}
      </button>
      <div
        className={
          display
            ? "flex justify-center  w-screen translate-x-0 transition-transform mb-2"
            : "translate-x-[-1000%] transition-transform mb-2"
        }
      >
        <div className="rounded-xl px-2 mx-10 flex flex-row justify-start border border-[#858585]  ">
          <NavbarItem
            title="Home"
            component={<FaHome />}
            link="/"
            active={false}
          />
          <NavbarItem
            title="Watchlist"
            component={<FaGlasses />}
            link="/watchlist"
            active={false}
          />
          <NavbarItem
            title="Search"
            component={<FaSearch />}
            link="/search"
            active={false}
          />
          <NavbarItem
            title="Movers"
            component={<CiAlignTop />}
            link="/topmovers"
            active={false}
          />
          <NavbarItem
            title="Sign Up"
            component={<MdPerson />}
            link="/signup"
            active={false}
          />
        </div>
      </div> */
}
