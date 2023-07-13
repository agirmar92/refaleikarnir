"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FoxIcon from "@/icons/FoxIcon";
import MenuIcon from "@/icons/MenuIcon";
import classNames from "classnames";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames(
        "flex justify-between h-[64px] px-5 items-center z-50 fixed top-0 left-0 w-full transition-[background]",
        {
          "bg-winter": scrollY > window.innerWidth - 64 * 2,
        }
      )}
    >
      <Link className="flex space-x-1" href="/">
        <FoxIcon />
        <h1 className="small-caps text-xl font-medium">Refaleikarnir</h1>
      </Link>
      <MenuIcon />
    </header>
  );
};

export default Header;
