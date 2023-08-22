"use client";

import Image from "next/image";
import { PlayerDetails, TeamColor } from "@/utils/types";
import { useRef } from "react";
import FoxIcon from "@/icons/FoxIcon";
import classNames from "classnames";

const teamColorToBgClassName: Record<TeamColor, string> = {
  BLACK: "bg-black",
  WHITE: "bg-white",
  SILVER: "bg-fox-silver",
  RED: "bg-fox-red",
};

const DynamicPlayerPortrait = ({
  player,
  color,
}: {
  player: PlayerDetails;
  color?: TeamColor;
}) => {
  const loadingPlaceholderRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative overflow-hidden">
      <div
        ref={loadingPlaceholderRef}
        className="absolute rounded-full bg-gray-400 animate-pulse top-0 left-0 right-0 bottom-0 flex justify-center items-center"
      >
        <span className="mt-1">
          <FoxIcon color="SILVER" />
        </span>
      </div>
      <div
        className={classNames(
          "w-10 h-10 rounded-full flex items-center justify-center",
          color ? teamColorToBgClassName[color] : ""
        )}
      >
        <Image
          className={classNames(
            "rounded-full",
            color ? "w-9 h-9" : "w-10 h-10"
          )}
          alt={`${player.slug}-portrait`}
          src={player.coverPhotoUrl}
          width={40}
          height={40}
          unoptimized
          style={{ visibility: "hidden" }}
          onLoadingComplete={(img) => {
            if (img.naturalWidth > 0) {
              img.style.visibility = "visible";
              if (loadingPlaceholderRef.current) {
                loadingPlaceholderRef.current.style.visibility = "hidden";
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default DynamicPlayerPortrait;
