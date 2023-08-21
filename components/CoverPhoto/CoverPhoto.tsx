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

const getPhotoId = (year: number, season: "summer" | "winter" | undefined) => {
  const yearAndSeasonToId: { [key: string]: string } = {
    "2014-winter": "1j_cWENZUerAnmLfZMv6gvLl8wXET5J5V",
    "2014-summer": "1tg4cwHEAtYhLZavrt-z1IedIVcHGBWMD",
    "2015-winter": "12CJDQsxAHlSG8wmFiUi51JWaavcNIbkl",
    "2015-summer": "1N2fJhi3Ofh8Cu1NhSBaI9WMUrMy1bBku",
    "2016-winter": "1OS6_1GWPp2P-EShBJ6ffKmbNWMw7NKm6",
    "2016-summer": "1WOkbsIrO2c0wSKHOKfNev5Fh-kYi08tx",
    "2017-winter": "1iZmAclRDQULib4a4yBE9TTu3UWaTRr8X",
    "2017-summer": "1B-FzCpjmmFLccFwt5kwVL1kYiYBTgCNN",
    "2018-winter": "1rT5-GZhsCqt2KzHs05ngePxU5sOyDo9F",
    "2018-summer": "1nNPIIrm9NfySL-H-e0BJA69HurOx-WyZ",
    "2019-winter": "1UWJ9M3DXYKGZy4nSyclMtN7juYuwDOp5",
    "2019-summer": "1rHHEtemspEsbiolsmqo9uh8NuoCtxzlB",
    "2020-winter": "1bpjYF5fwSMh3BSSdczNZRa9dWUbq969a",
    "2020-summer": "1k-NotuxaTpKV91FVsHHkevSOFpllfKZt",
    "2022": "1MvGfWRcpaPaiDy7XDfvhD-L-7q0GnOP3",
    "2023": "18mhhfjLk94Yz0Qo9z1T80eWOK7pt7F13",
  };
  return (
    yearAndSeasonToId[
      `${year.toString()}${Boolean(season) ? `-${season}` : ""}`
    ] ?? ""
  );
};

const CoverPhoto = ({ children }: { children: ReactNode }) => {
  const { gamesIndex, currentYear } = useYear();
  const season = results[gamesIndex].season;

  return (
    <div className="w-[100vw] h-[100vw] relative -mt-16">
      <DynamicallyPositionedContent emblems={<WinningTeamsEmblems />}>
        {children}
      </DynamicallyPositionedContent>
      <div className="w-full h-[100vw] bg-winter opacity-50 fixed z-10" />
      <DynamicCoverPhoto
        photoSrc={`https://drive.google.com/uc?id=${getPhotoId(
          currentYear,
          season
        )}`}
      />
    </div>
  );
};

export default CoverPhoto;
