/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { NavTransition } from "./NavTransition";
import Hamburger from "./utils/Hamburger";
import { getCookie } from "cookies-next";
const NavbarMobile = (props: any) => {
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
          <img src="/FoursightLogo.png" alt="Foursight Logo" className="h-8" />
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
