import React, { createContext, useReducer } from 'react';

const AppContext = createContext();
const AppConsumer = AppContext.Consumer;

const reducer = (state, action) => {
    switch (action.type) {
        case "SHOW_NEXT":
            const newStockDeck = [...state.stockDeck];
            const card = newStockDeck.pop();
            const newWasteDeck = [...state.wasteDeck];
            newWasteDeck.unshift(card);
            return {
                ...state,
                stockDeck: newStockDeck,
                wasteDeck: newWasteDeck
            };
        case "RESET":
            return {
                ...state,
                wasteDeck: [],
                stockDeck: [...state.wasteDeck]
            };
        default:
            return;
    }
};

const AppProvider = props => {

    const showNext = () => {
        dispatch({ type: "SHOW_NEXT" });
    }

    const resetWaste = () => {
        dispatch({ type: "RESET" });
    }

    const moveCardToFoundations = () => {
        console.log("called moveCardToFoundations");
    }

    let tableauDeck = [];
    let remainingDeck = [];
    if (props.deck && props.deck.length > 0) {
        tableauDeck = props.deck.slice(0, 28);
        remainingDeck = props.deck.slice(28, 52);
    }

    const initialState = {
        stockDeck: remainingDeck.reverse(),
        wasteDeck: [],
        tableauDeck,
        showNext,
        resetWaste,
        moveCardToFoundations
    };

    const [appState, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={appState}>
            {props.children}
        </AppContext.Provider>
    );
}

export {
    AppConsumer,
    AppProvider
};

export default AppContext;
