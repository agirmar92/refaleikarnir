"use client";

import classNames from "classnames";
import { results } from "@/data/results";
import WinningTeamsEmblems from "@/components/WinningTeamsEmblems";
import { numOfGames, useYear } from "@/contexts/YearContext";
import ArrowIcon from "@/icons/ArrowIcon";
import useScrollY from "@/hooks/useScrollY";
import useMainContentWidth from "@/hooks/useMainContentWidth";

const YearSelector = () => {
  const { gamesIndex, stepBack, stepForward, jumpToIndex } = useYear();
  const { season } = results[gamesIndex];
  const scrollY = useScrollY();
  const mainContentWidth = useMainContentWidth();

  return (
    <div
      className={classNames(
        "left-0 right-0 z-50 p-3 box-border transition-[background] w-full max-w-screen-sm sm:left-1/2 sm:-translate-x-1/2",
        mainContentWidth && scrollY > mainContentWidth - 64 * 2
          ? "fixed top-16 bg-winter-light"
          : "absolute -top-16",
      )}
    >
      <div
        className={classNames(
          "absolute left-0 bottom-[54px] w-full opacity-0 transition-opacity",
          {
            "opacity-100":
              mainContentWidth && scrollY < mainContentWidth - (64 * 2 + 26),
          },
        )}
      >
        <WinningTeamsEmblems />
      </div>
      <div className="uppercase text-center text-4xl font-extrabold flex">
        <button
          className={classNames({
            invisible: gamesIndex === 0,
          })}
          disabled={gamesIndex === 0}
          onClick={() => stepBack()}
          aria-label="Step to later year"
        >
          <ArrowIcon orientation="left" />
        </button>
        <div className="flex-1 relative">
          <h2 className="inline-flex items-center relative">
            {results[gamesIndex].year}
            <div className="absolute -right-4 h-0 w-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-white"></div>
          </h2>
          <label htmlFor="year-selector" className="sr-only">
            Select year/season
          </label>
          <select
            id="year-selector"
            name="Year/season selector"
            className="bg-transparent text-transparent appearance-none text-center absolute top-0 left-0 right-0 bottom-0 cursor-pointer"
            onChange={(e) =>
              jumpToIndex(Number.parseInt(e.currentTarget.value))
            }
            value={gamesIndex}
          >
            {results.map((result, iResult) => (
              <option key={iResult} value={iResult}>
                {result.year}
                {result.season
                  ? ` (${result.season === "summer" ? "sumar" : "vetur"})`
                  : ""}
              </option>
            ))}
          </select>
        </div>
        {season && (
          <span className="absolute text-sm left-0 bottom-1 right-0 leading-3">
            {season === "summer" ? "Sumar" : "Vetur"}
          </span>
        )}
        <button
          className={classNames({
            invisible: gamesIndex === numOfGames - 1,
          })}
          disabled={gamesIndex === numOfGames - 1}
          onClick={() => stepForward()}
          aria-label="Step to earlier year"
        >
          <ArrowIcon orientation="right" />
        </button>
      </div>
    </div>
  );
};

export default YearSelector;
