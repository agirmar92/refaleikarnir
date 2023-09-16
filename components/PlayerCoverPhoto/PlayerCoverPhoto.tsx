"use client";

import { ReactNode } from "react";
import classNames from "classnames";
import useMainContentWidth from "@/hooks/useMainContentWidth";
import useScrollY from "@/hooks/useScrollY";
import DynamicCoverPhoto from "../CoverPhoto/DynamicCoverPhoto";

const DynamicallyPositionedContent = ({
  children,
}: {
  children: ReactNode;
}) => {
  const scrollY = useScrollY();
  const mainContentWidth = useMainContentWidth();

  return (
    <div
      className={classNames(
        "left-0 right-0 z-50 p-3 box-border transition-[background] w-full max-w-screen-sm sm:left-1/2 sm:-translate-x-1/2",
        mainContentWidth && scrollY > mainContentWidth - 64 * 2
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
