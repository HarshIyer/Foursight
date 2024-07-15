"use client";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Link from "next/link";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let inputClass =
    "px-4 border border-[#E0E0E0] w-full p-2 rounded-lg mb-3 hover:border-black transition transition-all-0.5s";
  let labelClass = "text-md font-semibold my-2";
  return (
    <div className="md:mx-[15%] min-h-screen">
      <div className="flex flex-col">
        <Navbar />
        <div className="rounded-xl md:w-full flex flex-col md:flex-row border border-[#037A68]  mx-6 md:mx-0 mt-[10%] mb-12">
          <div className="rounded-t-xl md:rounded-tr-none md:rounded-l-xl p-6 px-8 md:w-[50%] text-white bg-[#037A68]">
            <h1 className="text-3xl  font-semibold ">Register</h1>
            <hr className="mb-8 mt-4 border-2 rounded-lg"></hr>
            <p className="text-xl">
              Get access to real-time data and graphical analysis for{" "}
              <span className="text-[#00FFD8]"> 2000+ stocks.</span>
            </p>
          </div>
          <div className="p-4  md:w-[50%]">
            <form className="mx-2 md:mx-12">
              <div className="flex flex-col">
                <label htmlFor="username" className={labelClass}>
                  Username
                </label>
                <input
                  name="username"
                  className={inputClass}
                  value={username}
                  placeholder="Choose a username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  name="email"
                  className={inputClass}
                  value={email}
                  placeholder="Enter your e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password" className={labelClass}>
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className={inputClass}
                  value={password}
                  placeholder="Your password goes here.."
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-center flex flex-col items-center w-full">
                <button className="bg-[#037A68] hover:bg-teal-800 transition transition-all-0.5s text-white font-semibold p-2 mt-4 rounded-md">
                  Register
                </button>
                <p className="text-sm mt-2">
                  Already have an account?{" "}
                  <Link href={"/login"} className="green-text hover:underline">
                    Login
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
