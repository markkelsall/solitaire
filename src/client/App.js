import React from "react";

import { AppProvider } from './contexts/AppContext';

import AppTableauConsumer from "./components/Tableau/AppTableauConsumer";
import AppHandConsumer from "./components/Hand/AppHandConsumer";
import AppWasteConsumer from "./components/Waste/AppWasteConsumer";
import Foundations from "./components/Foundations";
import ResetGame from "./components/ResetGame";

const App = ({ shuffleDeck, deck }) => {
  return (
    <AppProvider deck={deck}>
      <div className="p-4">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex flex-row">
              <div className="mr-4">
                <AppHandConsumer />
              </div>
              <AppWasteConsumer />
            </div>
            <Foundations />
          </div>
          <div className="flex justify-end mt-4">
            <AppTableauConsumer />
          </div>
        </div>
        <ResetGame shuffleDeck={shuffleDeck} />
      </div>
    </AppProvider>
  );
}

export default App;
