"use client";

import { numOfGames, useYear } from "@/contexts/YearContext";
import ArrowIcon from "@/icons/ArrowIcon";
import classNames from "classnames";

const YearSelector = () => {
  const { currentYear, gamesIndex, stepBack, stepForward } = useYear();

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
