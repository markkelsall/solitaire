import React from "react";

import Tableau from "./components/Tableau";
import Stock from "./components/Stock";
import Talon from "./components/Talon";
import Foundations from "./components/Foundations";

const App = ({ shuffleDeck }) => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-row">
          <div className="mr-4">
            <Stock />
          </div>
          <Talon />
        </div>
        <Foundations />
      </div>
      <Tableau />
    </div>
  );
}

export default App;
