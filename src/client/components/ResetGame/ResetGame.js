import React from 'react';

const ResetGame = ({ shuffleDeck }) => {
  const resetGameClick = () => {
    shuffleDeck && shuffleDeck();
  };

  return (
    <button data-testid="resetGame" onClick={resetGameClick}>New Game</button>
  );
};

export default ResetGame;
