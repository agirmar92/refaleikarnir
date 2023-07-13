"use client";

import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";

const CoverPhoto = ({ children }: { children: ReactNode }) => {
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
    <div className="w-[100vw] h-[100vw] relative">
      <div
        className={classNames(
          "left-0 right-0 z-50 p-3 box-border transition-[background]",
          screenWidth && scrollY > screenWidth - 64 * 2
            ? "fixed top-[64px]"
            : "absolute bottom-0",
          {
            "bg-winter-light": screenWidth && scrollY > screenWidth - 64 * 2,
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
