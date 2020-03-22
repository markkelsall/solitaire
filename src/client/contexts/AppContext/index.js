import React, { createContext, useReducer } from 'react';
import reducer from '../reducers';

const AppContext = createContext();
const AppConsumer = AppContext.Consumer;

const AppProvider = props => {
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
		}
		dispatch({ type: 'MOVE_CARD_TO_FOUNDATION', data });
  };

  const checkIfCardCanBeMovedToFoundations = (item, target) => {
		const foundationList = appState[target];
		if (foundationList.length === 0 && item.card.number === "A") {
			return true;
		}

		if (foundationList.length > 1) {
			const lastFoundationCard = foundationList[foundationList.length-1];
			if (item.card.suit === lastFoundationCard.suit) {
				if (parseInt(item.card.number) === (lastFoundationCard.number)+1) {
					return true;
				}
			}
		}
		return false;
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
