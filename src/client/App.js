import React from "react";

import Tableau from "./components/Tableau";
import Stock from "./components/Stock";

const App = ({ shuffleDeck }) => {
  return (
    <div>
      <div className="flex justify-between">
        <Stock />
        <button onClick={() => shuffleDeck()}>Reset game</button>
      </div>
      <Tableau />
    </div>
  );
}

export default App;
