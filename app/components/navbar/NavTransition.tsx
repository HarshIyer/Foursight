"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface NavTransitionProps extends LinkProps {
  children: React.ReactNode;
  className: string;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const NavTransition: React.FC<NavTransitionProps> = ({
  children,
  href,
  className,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(400);
    router.push(href);
    await sleep(400);

    body?.classList.remove("page-transition");
  };

  return (
    <Link
      {...props}
      href={href}
      className={className}
      onClick={handleTransition}
    >
      {children}
    </Link>
  );
};
