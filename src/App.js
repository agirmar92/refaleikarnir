import React, { Component } from 'react';
import Foxlympics from './Components/Foxlympics.js';
import results from './Data/Data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {results.reverse().map((yearData, iYear) => {
          return (
            <div key={iYear} className="App__year">
              <Foxlympics
                isWinter
                teams={yearData.get('teams')}
                results={yearData.get('winter')}
                year={yearData.get('year')}
              />
              <div
                className={
                  iYear % 2 === 0
                    ? 'App__seperator'
                    : 'App__seperator App__seperator--odd'
                }
              >
                <div className="App__seperatorTitle App__seperatorTitle--winter">
                  Vetur
                </div>
                <div className="App__seperatorTitle App__seperatorTitle--summer">
                  Sumar
                </div>
              </div>
              <Foxlympics
                isSummer
                teams={yearData.get('teams')}
                results={yearData.get('summer')}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
