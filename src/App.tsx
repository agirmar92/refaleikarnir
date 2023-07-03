import React from "react";
import Foxlympics from "./Components/Foxlympics";
import results from "./Data/Data";
import classNames from "classnames";

const beforeClassNames =
  "before:content-['Vetur'] before:right-[calc(50%+60px)] before:bottom-4 before:absolute before:text-[22px] before:font-gantari";
const afterClassNames =
  "after:content-['Sumar'] after:left-[calc(50%+60px)] after:top-4 after:absolute after:text-[22px] after:font-gantari";

const App = () => {
  return (
    <main className="h-full w-screen snap-x snap-mandatory flex flex-row font-bold overflow-y-hidden">
      {results.reverse().map((yearData, iYear) => {
        return (
          <section
            key={iYear}
            className="relative snap-start h-screen min-w-full flex flex-col items-center justify-center text-xl text-fox-white bg-winter"
          >
            <div
              className={classNames(
                "absolute w-screen text-[42px] leading-[42px] text-center z-10 text-white text-shadow font-tilliana",
                beforeClassNames,
                afterClassNames
              )}
            >
              {yearData.get("year")}
            </div>
            <Foxlympics
              isWinter
              teams={yearData.get("teams")}
              results={yearData.get("winter")}
            />
            <Foxlympics
              isSummer
              teams={yearData.get("teams")}
              results={yearData.get("summer")}
            />
          </section>
        );
      })}
    </main>
  );
};

export default App;
