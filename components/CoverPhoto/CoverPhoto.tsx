"use client";

import { ReactNode } from "react";
import classNames from "classnames";
import useScreenWidth from "@/hooks/useScreenWidth";
import useScrollY from "@/hooks/useScrollY";
import { useYear } from "@/contexts/YearContext";
import { results } from "@/data/results";
import WinningTeamsEmblems from "@/components/WinningTeamsEmblems";
import DynamicCoverPhoto from "./DynamicCoverPhoto";

const DynamicallyPositionedContent = ({
  children,
  emblems,
}: {
  children: ReactNode;
  emblems: ReactNode;
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
      <div
        className={classNames(
          "absolute left-0 bottom-[54px] w-full opacity-0 transition-opacity",
          {
            "opacity-100": screenWidth && scrollY < screenWidth - (64 * 2 + 26),
          }
        )}
      >
        {emblems}
      </div>
      {children}
    </div>
  );
};

const CoverPhoto = ({ children }: { children: ReactNode }) => {
  const { gamesIndex } = useYear();
  const coverPhotoUrl = results[gamesIndex].coverPhotoUrl;

  return (
    <div className="w-[100vw] h-[100vw] relative -mt-16">
      <DynamicallyPositionedContent emblems={<WinningTeamsEmblems />}>
        {children}
      </DynamicallyPositionedContent>
      <div className="w-full h-[100vw] bg-winter opacity-50 fixed z-10" />
      <DynamicCoverPhoto photoSrc={coverPhotoUrl} isPriority />
    </div>
  );
};

export default CoverPhoto;
