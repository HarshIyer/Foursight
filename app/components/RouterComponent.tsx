import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { NavTransition } from "./navbar/NavTransition";

export default function RouterComponent() {
  const pathname = usePathname();
  const pathArray: any = pathname.split("/");
  const objectArray: any = {
    "": "Home",
    about: "About",
    contact: "Contact",
    dashboard: "Dashboard",
    login: "Login",
    register: "Register",
    topmovers: "Top Movers",
    watchlist: "Watchlist",
    portfolio: "Portfolio",
    stocks: "Stocks",
  };

  return (
    <div className=" mr-6 md:mx-0">
      <div className="flex flex-row">
        {pathArray.map((path: any) => {
          return (
            <div key={null}>
              <p className="text-xs text-[#1E1E1E] font-light mr-2">
                <NavTransition href={`/${path}`} className="hover:underline">
                  {objectArray[path]
                    ? objectArray[path]
                    : path.charAt(0).toUpperCase() + path.slice(1)}{" "}
                </NavTransition>

                {pathArray.indexOf(path) !== pathArray.length - 1 && ">"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// {pathArray.map((path: any) => {
//   return objectArray[path]
//     ? objectArray[path]
//     : path.charAt(0).toUpperCase() + path.slice(1);
// })}

// <div className="md:mt-4 mx-6 md:mx-0">
//   <div className="flex flex-row">
//     <p className="text-xs text-[#1E1E1E] font-light mr-2 ">
//       <Link className="hover:underline" href={"/"}>
//         {" "}
//         Home
//       </Link>{" "}
//       &gt;{" "}
//     </p>
//     <p className="text-xs text-[#1E1E1E] font-light mr-2">
//       <Link className="hover:underline" href={"/stocks"}>
//         {" "}
//         Stocks
//       </Link>{" "}
//       &gt;{" "}
//     </p>
//     <p className="line-clamp-1 text-xs text-[#1E1E1E] font-light mr-2">
//       {symbol}
//     </p>
//   </div>
