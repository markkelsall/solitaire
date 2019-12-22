import React from "react";

import Tableau from "./components/Tableau";
import Hand from "./components/Hand";
import Waste from "./components/Waste";
import Foundations from "./components/Foundations";

const App = ({ shuffleDeck }) => {
  return (
    <div className="p-4">
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
        <Tableau />
      </div>
    </div>
  );
}

export default App;
