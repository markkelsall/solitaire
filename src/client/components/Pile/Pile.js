import React from 'react';
import PropTypes from 'prop-types';

import ActiveCard from '../ActiveCard';
import PileDropZone from '../PileDropZone';

const Pile = ({ cards, origin }) => {
  if (cards.length === 1) {
    return (
			<div className="relative w-32">
				<ActiveCard card={cards[0]} origin={origin} />
				<PileDropZone origin={origin} className="z-20 mt-8 absolute" />
			</div>
		);
  }

  if (cards.length === 2) {
    return (
      <div className="relative w-32">
        <img src="./cards/red_back.png" className="w-32 h-48 absolute" alt="Deck back" />
        <ActiveCard card={cards[0]} className="z-10 absolute mt-4 absolute" origin={origin} />
				<PileDropZone origin={origin} className="z-20 mt-8 absolute" />
      </div>
    );
  }

  if (cards.length === 3) {
    return (
      <div className="relative w-32">
        <img src="./cards/red_back.png" className="w-32 h-48 absolute" alt="card" />
        <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-4" alt="card" />
        <ActiveCard card={cards[0]} className="z-10 absolute mt-8" origin={origin} />
				<PileDropZone origin={origin} className="z-20 mt-12 absolute" />
      </div>
    );
  }

  if (cards.length === 4) {
    return (
      <div className="relative w-32">
        <img src="./cards/red_back.png" className="w-32 h-48 absolute" alt="card" />
        <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-4" alt="card" />
        <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-8" alt="card" />
        <ActiveCard card={cards[0]} className="z-10 absolute mt-12" pile="" origin={origin} />
      </div>
    );
  }

  if (cards.length === 5) {
    return (
      <div className="relative w-32">
        <img src="./cards/red_back.png" className="w-32 h-48 absolute" alt="card" />
        <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-4" alt="card" />
        <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-8" alt="card" />
        <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-12" alt="card" />
        <ActiveCard card={cards[0]} className="z-10 absolute mt-16" origin={origin} />
      </div>
    );
  }

  if (cards.length === 6) {
    return (
      <div className="relative w-32">
        <img src="./cards/red_back.png" className="w-32 h-48 absolute" alt="card" />
        <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-4" alt="card" />
        <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-8" alt="card" />
        <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-12" alt="card" />
        <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-16" alt="card" />
        <ActiveCard card={cards[0]} className="z-10 absolute mt-20" origin={origin} />
      </div>
    );
  }

  if (cards.length === 7) {
    return (
      <div className="relative w-32">
        <img src="./cards/red_back.png" className="w-32 h-48 absolute" alt="card" />
        <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-4" alt="card" />
        <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-8" alt="card" />
        <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-12" alt="card" />
        <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-16" alt="card" />
        <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-20" alt="card" />
        <ActiveCard card={cards[0]} className="z-10 absolute mt-24" origin={origin} />
      </div>
    );
  }

  return <div className="w-32 h-48 border-dashed border-2 border-black rounded-lg" />;
};

Pile.propTypes = {
  cards: PropTypes.array
};

Pile.defaultProps = {
  cards: []
};

export default Pile;
