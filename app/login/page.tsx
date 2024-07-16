"use client";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { createHash } = require("crypto");
import { usernameRegex } from "../components/regexHandlers";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Link from "next/link";
import axios from "axios";
import { apiURL } from "../components/apiURL";
import { useRouter } from "next/navigation";
var crypto = require("crypto");

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const notifySuccess = (message: string) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  const notifyError = (message: string) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  async function loginHandler(e: React.FormEvent) {
    e.preventDefault();
    let hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    if (username === "" || password === "") {
      notifyError("Please fill all the fields");
      return;
    } else if (!usernameRegex(username)) {
      notifyError("Enter a valid username!");
      return;
    }
    let results;
    try {
      results = await axios.post(`${apiURL}/login`, {
        username: username,
        password: hashedPassword,
      });
    } catch (err: any) {
      results = err.response;
    }
    if (results?.status === 200) {
      notifySuccess("Logged in successfully");
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    } else if (results?.status === 401) {
      notifyError("Incorrect Credentials");
    } else {
      notifyError("Something went wrong. Please try again later.");
    }
  }

  let inputClass =
    "px-4 border border-[#E0E0E0] w-full p-2 rounded-lg mb-3 hover:border-black transition transition-all-0.5s";
  let labelClass = "text-md font-semibold my-2";
  return (
    <div className="md:mx-[15%] min-h-screen ">
      <div className="flex flex-col ">
        <Navbar />
        <div className="rounded-xl xl:w-full flex flex-col xl:flex-row border border-[#037A68]  mx-6 xl:mx-0 mt-[10%] ">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
          />
          <div className="rounded-t-xl xl:rounded-tr-none xl:rounded-l-xl p-6 px-8 xl:w-[50%] text-white bg-[#037A68]">
            <h1 className="text-3xl  font-semibold ">Login</h1>
            <hr className="mb-8 mt-4 border-2 rounded-lg"></hr>
            <p className="text-xl">
              Get access to real-time data and graphical analysis for{" "}
              <span className="text-[#00FFD8]"> 2000+ stocks.</span>
            </p>
          </div>
          <div className="p-4  xl:w-[50%]">
            <form className="mx-2 xl:mx-12" onSubmit={loginHandler}>
              <div className="flex flex-col">
                <label htmlFor="username" className={labelClass}>
                  Username
                </label>
                <input
                  name="username"
                  className={inputClass}
                  value={username}
                  placeholder="Enter your username"
                  onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password" className={labelClass}>
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className={inputClass}
                  value={password}
                  placeholder="Your password goes here..."
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-center flex flex-col items-center w-full">
                <button className="bg-[#037A68] hover:bg-teal-800 transition transition-all-0.5s text-white font-semibold p-2 mt-4 rounded-md">
                  Login
                </button>
                <p className="text-sm mt-2">
                  Don&apos;t have an account?{" "}
                  <Link href={"/signup"} className="green-text hover:underline">
                    Sign Up
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
