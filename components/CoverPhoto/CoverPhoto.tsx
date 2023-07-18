"use client";

import { ReactNode } from "react";
import classNames from "classnames";
import useScreenWidth from "@/hooks/useScreenWidth";
import useScrollY from "@/hooks/useScrollY";

const CoverPhoto = ({ children }: { children: ReactNode }) => {
  const scrollY = useScrollY();
  const screenWidth = useScreenWidth();

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
