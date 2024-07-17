import type { NextRequest } from "next/server";
import axios from "axios";
import { apiURL } from "./app/components/apiURL";
export async function middleware(request: NextRequest) {
  let currentUser = false; //request.cookies.get("token")?.value
  let results;

  let token = request.cookies.get("token")?.value;

  try {
    results = await axios({
      method: "post",
      url: apiURL + "/auth/verifyToken",
      headers: { Authorization: "Bearer " + token },
    });
  } catch (err: any) {
    results = err.response;
  }
  if (results?.status === 200) {
    currentUser = true;
  } else {
    currentUser = false;
  }

  if (currentUser && !request.nextUrl.pathname.startsWith("/dashboard")) {
    return Response.redirect(new URL("/dashboard", request.url));
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard"],
};
