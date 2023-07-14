"use client";

import Link from "next/link";
import classNames from "classnames";
import FoxIcon from "@/icons/FoxIcon";
import MenuIcon from "@/icons/MenuIcon";
import useScreenWidth from "@/hooks/useScreenWidth";
import useScrollY from "@/hooks/useScrollY";

const Header = () => {
  const scrollY = useScrollY();
  const screenWidth = useScreenWidth();

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
