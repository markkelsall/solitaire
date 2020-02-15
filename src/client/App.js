import React from "react";

import Tableau from "./components/Tableau";
import Hand from "./components/Hand";
import Waste from "./components/Waste";
import Foundations from "./components/Foundations";
import ResetGame from "./components/ResetGame";

const App = ({ shuffleDeck, deck }) => {
  return (
    <div className="p-4">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-row">
            <div className="mr-4">
              <Hand />
            </div>
            <Waste />
          </div>
          <Foundations />
        </div>
        <div className="flex justify-end mt-4">
          <Tableau deck={deck} />
        </div>
      </div>
      <ResetGame shuffleDeck={shuffleDeck} />
    </div >
  );
}

export default App;
