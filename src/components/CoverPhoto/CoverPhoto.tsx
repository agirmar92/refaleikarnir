"use client";

import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";

const CoverPhoto = ({ children }: { children: ReactNode }) => {
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
    <div className="w-[100vw] h-[100vw] relative">
      <div
        className={classNames(
          "left-0 right-0 z-50 p-3 box-border transition-[background]",
          scrollY > window.innerWidth - 64 * 2
            ? "fixed top-[64px]"
            : "absolute bottom-0",
          {
            "bg-winter-light": scrollY > window.innerWidth - 64 * 2,
          }
        )}
      >
        {children}
      </div>
      <div className="w-full h-[100vw] bg-winter opacity-50 fixed z-10" />
      <div className="w-full h-[100vw] bg-coverPhoto bg-contain fixed" />
    </div>
  );
};

export default CoverPhoto;
