import React, { Component } from "react";
import Foxlympics from "./Components/Foxlympics.js";
import results from "./Data/Data";
import "./App.css";

class App extends Component {
  render() {
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
  }
}

export default App;
