"use client";

import { numOfGames, useYear } from "@/contexts/YearContext";
import { results } from "@/data/results";
import ArrowIcon from "@/icons/ArrowIcon";
import classNames from "classnames";

const YearSelector = () => {
  const { currentYear, gamesIndex, stepBack, stepForward } = useYear();
  const { season } = results[gamesIndex];

  return (
    <div className="uppercase text-center text-4xl font-extrabold flex">
      <button
        className={classNames({
          invisible: gamesIndex === numOfGames - 1,
        })}
        disabled={gamesIndex === numOfGames - 1}
        onClick={() => stepForward()}
      >
        <ArrowIcon orientation="left" />
      </button>
      <h2 className="flex-1">{currentYear}</h2>
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
      >
        <ArrowIcon orientation="right" />
      </button>
    </div>
  );
};

export default YearSelector;
