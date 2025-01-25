"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import FoxIcon from "@/icons/FoxIcon";
import MenuIcon from "@/icons/MenuIcon";
import CloseIcon from "@/icons/CloseIcon";
import useMainContentWidth from "@/hooks/useMainContentWidth";
import useScrollY from "@/hooks/useScrollY";

const HeaderMenuLink = ({
  label,
  href,
  onClickHandler,
}: {
  label: string;
  href: string;
  onClickHandler: () => void;
}) => {
  return (
    <Link href={href} onClick={onClickHandler} className="text-2xl underline">
      {label}
    </Link>
  );
};

const Header = () => {
  const scrollY = useScrollY();
  const mainContentWidth = useMainContentWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "unset";
      }
    }
  };

  return (
    <>
      <header
        className={classNames(
          "flex justify-between h-[64px] min-h-[64px] px-5 items-center z-999 fixed top-0 w-full transition-[background] max-w-(--breakpoint-sm)",
          {
            "bg-winter":
              pathname === "/stats" ||
              (mainContentWidth && scrollY > mainContentWidth - 64 * 2),
          },
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
        <button onClick={() => handleMenuToggle()} aria-label="Menu button">
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>
      <div
        className={classNames(
          "fixed left-1/2 -translate-x-1/2 transition-[top] ease-in-out duration-300 w-full h-full max-w-(--breakpoint-sm) sm:max-h-screen z-998 bg-winter p-3 flex flex-col justify-center flex-wrap content-center",
          isMenuOpen ? "top-0" : "-top-full",
        )}
      >
        <div className="flex flex-col space-y-4 text-center w-fit">
          <HeaderMenuLink
            label="Niðurstöður"
            href="/"
            onClickHandler={() => {
              handleMenuToggle();
            }}
          />
          <HeaderMenuLink
            label="Önnur tölfræði"
            href="/stats"
            onClickHandler={() => {
              handleMenuToggle();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
