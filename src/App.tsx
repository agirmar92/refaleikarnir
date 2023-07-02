import React from "react";
import Foxlympics from "./Components/Foxlympics";
import results from "./Data/Data";
import "./App.css";

const App = () => {
  return (
    <main className="App">
      {results.reverse().map((yearData, iYear) => {
        return (
          <section key={iYear} className="App__year">
            <div className="App__yearText">{yearData.get("year")}</div>
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
