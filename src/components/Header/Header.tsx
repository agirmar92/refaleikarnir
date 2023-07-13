"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FoxIcon from "@/icons/FoxIcon";
import MenuIcon from "@/icons/MenuIcon";
import classNames from "classnames";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState<number | undefined>();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={classNames(
        "flex justify-between h-[64px] px-5 items-center z-50 fixed top-0 left-0 w-full transition-[background]",
        {
          "bg-winter": screenWidth && scrollY > screenWidth - 64 * 2,
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
