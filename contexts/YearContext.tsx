import { ReactNode, createContext, useContext, useState } from "react";
import { results } from "@/data/results";

const numOfGames = results.length;

const yearContextInitial = {
  stepForward: () => {},
  stepBack: () => {},
  currentYear: results[numOfGames - 1].year,
  gamesIndex: 0,
};

const YearContext = createContext(yearContextInitial);

const YearProvider = ({ children }: { children: ReactNode }) => {
  const [gamesIndex, setGamesIndex] = useState(numOfGames - 1);
  const [currentYear, setCurrentYear] = useState(results[gamesIndex].year);

  const stepForward = () => {
    if (gamesIndex < numOfGames - 1) {
      const newIndex = gamesIndex + 1;
      setGamesIndex(newIndex);
      setCurrentYear(results[newIndex].year);
    }
  };
  const stepBack = () => {
    if (gamesIndex > 0) {
      const newIndex = gamesIndex - 1;
      setGamesIndex(newIndex);
      setCurrentYear(results[newIndex].year);
    }
  };

  return (
    <YearContext.Provider
      value={{
        stepForward,
        stepBack,
        currentYear,
        gamesIndex,
      }}
    >
      {children}
    </YearContext.Provider>
  );
};

const useYear = () => useContext(YearContext);

export { YearContext, YearProvider, useYear, numOfGames };
