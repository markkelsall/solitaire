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
		case 'MOVE_CARD_TO_FOUNDATION': {
			const foundationOne = state.foundationOne;
			const foundationTwo = state.foundationTwo;
			const foundationThree = state.foundationThree;
			const foundationFour = state.foundationFour;
			if (action.data.target === 'foundationOne') {
				foundationOne.push(action.data.item.card);
			}
			if (action.data.target === 'foundationTwo') {
				foundationTwo.push(action.data.item.card);
			}
			if (action.data.target === 'foundationThree') {
				foundationThree.push(action.data.item.card);
			}
			if (action.data.target === 'foundationFour') {
				foundationFour.push(action.data.item.card);
			}

			const pileOne = [...state.pileOne];
			const pileTwo = [...state.pileTwo];
			const pileThree = [...state.pileThree];
			const pileFour = [...state.pileFour];
			const pileFive = [...state.pileFive];
			const pileSix = [...state.pileSix];
			const pileSeven = [...state.pileSeven];
			console.log(action.data.item.origin);
			if (action.data.item.origin === 'pileOne') {
				console.log(pileOne);
				pileOne.shift();
				console.log(pileOne);
			}
			if (action.data.item.origin === 'pileTwo') {
				console.log(pileTwo);
				pileTwo.shift();
				console.log(pileTwo);
			}
			if (action.data.item.origin === 'pileThree') {
				console.log(pileThree);
				pileThree.shift();
				console.log(pileThree);
			}
			if (action.data.item.origin === 'pileFour') {
				console.log(pileFour);
				pileFour.shift();
				console.log(pileFour);
			}
			if (action.data.item.origin === 'pileFive') {
				console.log(pileFive);
				pileFive.shift();
				console.log(pileFive);
			}
			if (action.data.item.origin === 'pileSix') {
				console.log(pileSix);
				pileSix.shift();
				console.log(pileSix);
			}
			if (action.data.item.origin === 'pileSeven') {
				console.log(pileSeven);
				pileSeven.shift();
				console.log(pileSeven);
			}
			return {
				...state,
				foundationOne,
				foundationTwo,
				foundationThree,
				foundationFour,
				pileOne,
				pileTwo,
				pileThree,
				pileFour,
				pileFive,
				pileSix,
				pileSeven
			}
		}
    default:
      return state;
  }
};

const AppProvider = (props) => {
  const showNext = () => {
    dispatch({ type: 'SHOW_NEXT' });
  };

  const resetWaste = () => {
    dispatch({ type: 'RESET' });
  };

  const moveCardToFoundations = (item, target) => {
		console.log('called moveCardToFoundations');
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
