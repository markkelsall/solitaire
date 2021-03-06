import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import { AppProvider } from './contexts/AppContext';

import Tableau from './components/Tableau';
import AppHandConsumer from './components/Hand/AppHandConsumer';
import AppWasteConsumer from './components/Waste/AppWasteConsumer';
import FoundationsList from './components/FoundationsList';
import ResetGame from './components/ResetGame';

const App = ({ shuffleDeck, deck }) => (
  <AppProvider deck={deck}>
    <DndProvider backend={Backend}>
      <div className="p-4">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex flex-row">
              <div className="mr-4">
                <AppHandConsumer />
              </div>
              <AppWasteConsumer />
            </div>
            <FoundationsList />
          </div>
          <div className="flex justify-end mt-4">
            <Tableau />
          </div>
        </div>
        <ResetGame shuffleDeck={shuffleDeck} />
      </div>
    </DndProvider>
  </AppProvider>
);

export default App;
