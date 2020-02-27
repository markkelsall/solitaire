import React, { createContext, useState } from 'react';

const AppContext = createContext();
const AppConsumer = AppContext.Consumer;

const AppProvider = props => {

    const showNext = () => {
        const { stockDeck, wasteDeck } = appState;
        wasteDeck.unshift(stockDeck.pop());
        setState({
            ...appState,
            wasteDeck,
            stockDeck
        });
    }

    const resetWaste = () => {
        const { wasteDeck } = appState;
        const resetStockDeck = wasteDeck;
        const resetWasteDeck = [];
        setState({
            ...appState,
            wasteDeck: resetWasteDeck,
            stockDeck: resetStockDeck
        });
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

    const [appState, setState] = useState(initialState);

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
