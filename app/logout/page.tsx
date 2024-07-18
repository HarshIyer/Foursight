"use client";
import { useEffect } from "react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
export default function Logout() {
  const router = useRouter();

  function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    deleteCookie("token");
    sleep(500);
    router.push("/");
  });

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
}
