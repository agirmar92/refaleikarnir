"use client";

import Image from "next/image";
import { PlayerDetails } from "@/utils/types";
import { useRef } from "react";
import FoxIcon from "@/icons/FoxIcon";

const DynamicPlayerPortrait = ({ player }: { player: PlayerDetails }) => {
  const loadingPlaceholderRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative overflow-hidden">
      <div
        ref={loadingPlaceholderRef}
        className="absolute rounded-full bg-gray-400 animate-pulse top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center"
      >
        <span className="mt-1">
          <FoxIcon color="SILVER" />
        </span>
      </div>
      <Image
        className="w-10 h-10 rounded-full"
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
  );
};

export default DynamicPlayerPortrait;
