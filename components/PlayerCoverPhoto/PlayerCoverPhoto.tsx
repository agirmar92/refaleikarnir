"use client";

import { ReactNode } from "react";
import classNames from "classnames";
import useMainContentWidth from "@/hooks/useMainContentWidth";
import useScrollY from "@/hooks/useScrollY";
import DynamicCoverPhoto from "@/components/CoverPhoto/DynamicCoverPhoto";

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
          : "absolute -top-16",
      )}
    >
      {children}
    </div>
  );
};

const PlayerCoverPhoto = ({ coverPhotoUrl }: { coverPhotoUrl: string }) => (
  <div className="w-[100vw] h-[100vw] max-w-screen-sm max-h-[640px] fixed top-0">
    <div className="w-full h-full max-w-screen-sm max-h-[640px] bg-winter opacity-50 fixed z-10 top-0" />
    <DynamicCoverPhoto photoSrc={coverPhotoUrl} />
  </div>
);

export { DynamicallyPositionedContent };
export default PlayerCoverPhoto;
