import React from "react";

const ResetGame = ({ shuffleDeck }) => {

    const resetGameClick = () => {
        if (shuffleDeck) {
            // const newDeck = shuffleDeck();
        }
    }

    return (
        <button onClick={resetGameClick}>New Game</button>
    );
}

export default ResetGame;