"use client";

import { ReactNode } from "react";
import classNames from "classnames";
import useScreenWidth from "@/hooks/useScreenWidth";
import useScrollY from "@/hooks/useScrollY";
import { PlayerSlug } from "@/utils/types";

const DynamicallyPositionedContent = ({
  children,
}: {
  children: ReactNode;
}) => {
  const scrollY = useScrollY();
  const screenWidth = useScreenWidth();

  return (
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
  );
};

const PlayerCoverPhoto = ({
  children,
  backgroundClassName,
}: {
  children: ReactNode;
  backgroundClassName: `bg-${PlayerSlug}`;
}) => (
  <div className="w-[100vw] h-[100vw] relative -mt-16">
    <DynamicallyPositionedContent>{children}</DynamicallyPositionedContent>
    <div className="w-full h-[100vw] bg-winter opacity-50 fixed z-10" />
    <div
      className={classNames(
        "w-full h-[100vw] fixed bg-center bg-cover",
        backgroundClassName
      )}
    />
  </div>
);

export default PlayerCoverPhoto;
