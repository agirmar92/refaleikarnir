"use client";

import { ReactNode } from "react";
import classNames from "classnames";
import useScreenWidth from "@/hooks/useScreenWidth";
import useScrollY from "@/hooks/useScrollY";
import DynamicCoverPhoto from "../CoverPhoto/DynamicCoverPhoto";

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
        "left-0 right-0 z-50 p-3 box-border transition-[background] sm:absolute sm:bg-transparent sm:bottom-0 sm:top-auto",
        screenWidth && scrollY > screenWidth - 64 * 2
          ? "fixed top-[64px] bg-winter-light"
          : "absolute bottom-0"
      )}
    >
      {children}
    </div>
  );
};

const PlayerCoverPhoto = ({
  children,
  coverPhotoUrl,
}: {
  children: ReactNode;
  coverPhotoUrl: string;
}) => (
  <div className="w-[100vw] h-[100vw] sm:w-full sm:h-[638px] relative">
    <DynamicallyPositionedContent>{children}</DynamicallyPositionedContent>
    <div className="w-full h-full bg-winter opacity-50 sticky z-10" />
    <DynamicCoverPhoto photoSrc={coverPhotoUrl} />
  </div>
);

export default PlayerCoverPhoto;
