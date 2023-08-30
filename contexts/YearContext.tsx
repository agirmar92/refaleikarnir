import { ReactNode, createContext, useContext, useState } from "react";
import { results } from "@/data/results";

const numOfGames = results.length;

const yearContextInitial = {
  stepForward: () => {},
  stepBack: () => {},
  jumpToIndex: (_: number) => {},
  gamesIndex: 0,
};

const YearContext = createContext(yearContextInitial);

const YearProvider = ({ children }: { children: ReactNode }) => {
  const [gamesIndex, setGamesIndex] = useState(numOfGames - 1);

  const stepForward = () => {
    if (gamesIndex < numOfGames - 1) {
      const newIndex = gamesIndex + 1;
      setGamesIndex(newIndex);
    }
  };
  const stepBack = () => {
    if (gamesIndex > 0) {
      const newIndex = gamesIndex - 1;
      setGamesIndex(newIndex);
    }
  };
  const jumpToIndex = (index: number) => {
    if (index >= results.length || index < 0) {
      console.error(`Could not jump to games with index: ${index}`);
      return;
    }
    setGamesIndex(index);
  };

  return (
    <YearContext.Provider
      value={{
        stepForward,
        stepBack,
        jumpToIndex,
        gamesIndex,
      }}
    >
      {children}
    </YearContext.Provider>
  );
};

const useYear = () => useContext(YearContext);

export { YearContext, YearProvider, useYear, numOfGames };
