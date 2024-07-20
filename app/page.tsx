"use client";
import Navbar from "./components/navbar/Navbar";
import { NavTransition } from "./components/navbar/NavTransition";
export default function Home() {
  return (
    <div className="flex flex-col md:mx-[15%]">
      <Navbar logStatus={false} />
      <div className="mx-6 flex flex-col md:flex-row">
        <div className="mt-12 w-[50%]">
          <h1 className="text-6xl font-medium green-text">Foursight</h1>
          <h2 className="font-semibold text-4xl mt-12">
            Practice with virtual money,{" "}
            <span className="green-text">in the real market.</span>
          </h2>

          <h2 className="font-semibold text-3xl mt-4">
            Get access to real time data graphical analysis of{" "}
            <span className="green-text">2000+ stocks.</span>
          </h2>
        </div>
        <div></div>
      </div>
      <div className="flex justify-center">
        <NavTransition className="" href={"/signup"}>
          <button className="mt-12 bg-teal-700 hover:bg-teal-500 transition transition-all-0.5s text-white px-4 py-2 rounded-md">
            Get Started{" "}
          </button>
        </NavTransition>
      </div>
    </div>
  );
}
