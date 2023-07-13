import React from "react";
import Foxlympics from "@/components/Foxlympics";
import YearDivider from "@/components/YearDivider";
import { results } from "@/data/results";

const App = () => {
  return (
    <main className="h-full w-screen snap-x snap-mandatory flex flex-row font-bold overflow-y-hidden">
      {results
        .slice()
        .reverse()
        .map((yearData, iYear) => {
          return (
            <section
              key={iYear}
              className="relative snap-start h-screen min-w-full flex flex-col items-center justify-center text-xl text-fox-white bg-winter"
            >
              <YearDivider year={yearData.year} />
              <Foxlympics
                season="winter"
                teams={yearData.teams}
                results={yearData.winter}
              />
              <Foxlympics
                season="summer"
                teams={yearData.teams}
                results={yearData.summer}
              />
            </section>
          );
        })}
    </main>
  );
};

export default App;
