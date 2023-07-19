"use client";

import { ReactNode } from "react";
import classNames from "classnames";
import useScreenWidth from "@/hooks/useScreenWidth";
import useScrollY from "@/hooks/useScrollY";
import { useYear } from "@/contexts/YearContext";
import { results } from "@/data/results";

const defaultCoverPhoto = "bg-coverPhoto";
const coverPhotosByYearAndSeason: { [key: string]: string } = {
  "2023": "bg-coverPhoto-2023",
  "2022": "bg-coverPhoto-2022",
  "2020-summer": "bg-coverPhoto-2020-summer",
  "2020-winter": "bg-coverPhoto-2020-winter",
  "2019-summer": "bg-coverPhoto-2019-summer",
  "2019-winter": "bg-coverPhoto-2019-winter",
  "2018-summer": "bg-coverPhoto-2018-summer",
  "2018-winter": "bg-coverPhoto-2018-winter",
  "2017-winter": "bg-coverPhoto-2017-winter",
  "2016-winter": "bg-coverPhoto-2016-winter",
  "2015-summer": "bg-coverPhoto-2015-summer",
  "2015-winter": "bg-coverPhoto-2015-winter",
  "2014-summer": "bg-coverPhoto-2014-summer",
  "2014-winter": "bg-coverPhoto-2014-winter",
};

const CoverPhoto = ({ children }: { children: ReactNode }) => {
  const scrollY = useScrollY();
  const screenWidth = useScreenWidth();
  const { gamesIndex, currentYear } = useYear();
  const season = results[gamesIndex].season;

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
      <div
        className={classNames(
          "w-full h-[100vw] bg-contain fixed",
          `${
            coverPhotosByYearAndSeason[
              currentYear.toString() + (season ? `-${season}` : "")
            ] ?? defaultCoverPhoto
          }`,
          {
            blur: !Boolean(
              coverPhotosByYearAndSeason[
                currentYear.toString() + (season ? `-${season}` : "")
              ]
            ),
          }
        )}
      />
    </div>
  );
};

export default CoverPhoto;
