"use client";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import NavbarItem from "./NavbarItem";
import { CiAlignTop } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { FaGlasses } from "react-icons/fa";
const NavbarMobile = (props: any) => {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <div>
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
            ? "flex justify-center  w-screen translate-x-0 transition-transform"
            : "translate-x-[-1000%] transition-transform"
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
      </div>
    </div>
  );
};

export default NavbarMobile;
