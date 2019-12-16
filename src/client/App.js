import React from "react";
import Game from "./components/Game";
import Tableau from "./components/Tableau";

const App = deck => {
  return (
      <Game>
        <Tableau />
      </Game>
  );
}

export default App;
