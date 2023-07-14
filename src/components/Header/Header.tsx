"use client";

import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import FoxIcon from "@/icons/FoxIcon";
import MenuIcon from "@/icons/MenuIcon";
import useScreenWidth from "@/hooks/useScreenWidth";
import useScrollY from "@/hooks/useScrollY";

const Header = () => {
  const scrollY = useScrollY();
  const screenWidth = useScreenWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    if (!isMenuOpen) {
      // OPENING the menu overlay
      setIsMenuOpen(true);
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    } else {
      // CLOSING the menu overlay
      setIsMenuOpen(false);
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      <header
        className={classNames(
          "flex justify-between h-[64px] px-5 items-center z-[999] fixed top-0 left-0 w-full transition-[background]",
          {
            "bg-winter": screenWidth && scrollY > screenWidth - 64 * 2,
          }
        )}
      >
        <Link
          className="flex space-x-1"
          href="/"
          onClick={() => {
            if (isMenuOpen) {
              handleMenuToggle();
            }
          }}
        >
          <FoxIcon />
          <h1 className="small-caps text-xl font-medium">Refaleikarnir</h1>
        </Link>
        <button onClick={() => handleMenuToggle()}>
          <MenuIcon />
        </button>
      </header>
      <div
        className={classNames(
          "fixed w-full h-full transition-[backdrop-filter] z-[998] flex flex-col p-3 justify-center space-y-4 text-center",
          { "z-[-999]": !isMenuOpen, "backdrop-blur-md": isMenuOpen }
        )}
      >
        <span className="text-2xl">Menu item #1</span>
        <span className="text-2xl">Menu item #2</span>
        <span className="text-2xl">Menu item #3</span>
      </div>
    </>
  );
};

export default Header;
