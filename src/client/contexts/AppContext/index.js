import React, { createContext, useReducer } from 'react';

const AppContext = createContext();
const AppConsumer = AppContext.Consumer;

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_NEXT': {
      const newStockDeck = [...state.stockDeck];
      const card = newStockDeck.pop();
      const newWasteDeck = [...state.wasteDeck];
      newWasteDeck.unshift(card);
      return {
        ...state,
        stockDeck: newStockDeck,
        wasteDeck: newWasteDeck
      };
    }
    case 'RESET': {
      return {
        ...state,
        wasteDeck: [],
        stockDeck: [...state.wasteDeck]
      };
    }
    default:
  }
};

const AppProvider = (props) => {
  const showNext = () => {
    dispatch({ type: 'SHOW_NEXT' });
  };

  const resetWaste = () => {
    dispatch({ type: 'RESET' });
  };

  const moveCardFromPileToFoundations = () => {
    console.log('called moveCardToFoundations');
  };

  const checkIfCardCanBeMovedToFoundations = () => {
    console.log('checkIfCardCanBeMovedToFoundations');
  };

  let pileOne = [];
  let pileTwo = [];
  let pileThree = [];
  let pileFour = [];
  let pileFive = [];
  let pileSix = [];
  let pileSeven = [];

  let remainingDeck = [];
  const { deck } = props;
  if (deck && deck.length > 0) {
    pileOne = deck.slice(0, 1);
    pileTwo = deck.slice(1, 3);
    pileThree = deck.slice(3, 6);
    pileFour = deck.slice(6, 10);
    pileFive = deck.slice(10, 15);
    pileSix = deck.slice(15, 21);
    pileSeven = deck.slice(21, 28);
    remainingDeck = deck.slice(28, 52);
  }

  const initialState = {
    stockDeck: remainingDeck.reverse(),
    wasteDeck: [],
    pileOne,
    pileTwo,
    pileThree,
    pileFour,
    pileFive,
    pileSix,
    pileSeven,
    showNext,
    resetWaste,
    moveCardFromPileToFoundations,
    checkIfCardCanBeMovedToFoundations
  };

  const [appState, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={appState}>
      {props.children}
    </AppContext.Provider>
  );
};

export {
  AppConsumer,
  AppProvider
};

export default AppContext;
