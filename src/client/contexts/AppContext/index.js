import React, { createContext, useReducer } from 'react';
import reducer from '../reducers';

const AppContext = createContext();
const AppConsumer = AppContext.Consumer;

const AppProvider = (props) => {
  const showNext = () => {
    dispatch({ type: 'SHOW_NEXT' });
  };

  const resetWaste = () => {
    dispatch({ type: 'RESET' });
  };

  const moveCardToFoundations = (item, target) => {
    const data = {
      item,
      target
    };
    dispatch({ type: 'MOVE_CARD_TO_FOUNDATION', data });
  };

  const moveCardToPile = (item, target) => {
    const data = {
      item,
      target
    };
    dispatch({ type: 'MOVE_CARD_TO_PILE', data });
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
    pileOne[0].turned = true;
    pileTwo = deck.slice(1, 3);
    pileTwo[0].turned = true;
    pileThree = deck.slice(3, 6);
    pileThree[0].turned = true;
    pileFour = deck.slice(6, 10);
    pileFour[0].turned = true;
    pileFive = deck.slice(10, 15);
    pileFive[0].turned = true;
    pileSix = deck.slice(15, 21);
    pileSix[0].turned = true;
    pileSeven = deck.slice(21, 28);
    pileSeven[0].turned = true;
    remainingDeck = deck.slice(28, 52);
  }

  const initialState = {
    stockDeck: remainingDeck.reverse(),
    wasteDeck: [],
    foundationOne: [],
    foundationTwo: [],
    foundationThree: [],
    foundationFour: [],
    pileOne,
    pileTwo,
    pileThree,
    pileFour,
    pileFive,
    pileSix,
    pileSeven,
    showNext,
    resetWaste,
    moveCardToFoundations,
    moveCardToPile
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
