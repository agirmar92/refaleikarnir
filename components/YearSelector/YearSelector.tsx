"use client";

import { numOfGames, useYear } from "@/contexts/YearContext";
import { results } from "@/data/results";
import ArrowIcon from "@/icons/ArrowIcon";
import classNames from "classnames";

const YearSelector = () => {
  const { gamesIndex, stepBack, stepForward, jumpToIndex } = useYear();
  const { season } = results[gamesIndex];

  return (
    <div className="uppercase text-center text-4xl font-extrabold flex">
      <button
        className={classNames({
          invisible: gamesIndex === numOfGames - 1,
        })}
        disabled={gamesIndex === numOfGames - 1}
        onClick={() => stepForward()}
        aria-label="Step to earlier year"
      >
        <ArrowIcon orientation="left" />
      </button>
      <div className="flex-1 relative">
        <h2 className="inline-flex items-center relative">
          {results[gamesIndex].year}
          <div className="absolute -right-4 h-0 w-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-white"></div>
        </h2>
        <select
          name="pets"
          className="bg-transparent text-transparent appearance-none text-center absolute top-0 left-0 right-0 bottom-0"
          onChange={(e) => jumpToIndex(Number.parseInt(e.currentTarget.value))}
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
        <span className="absolute text-sm left-0 bottom-1 w-screen leading-3">
          {season === "summer" ? "Sumar" : "Vetur"}
        </span>
      )}
      <button
        className={classNames({
          invisible: gamesIndex === 0,
        })}
        disabled={gamesIndex === 0}
        onClick={() => stepBack()}
        aria-label="Step to later year"
      >
        <ArrowIcon orientation="right" />
      </button>
    </div>
  );
};

export default YearSelector;
