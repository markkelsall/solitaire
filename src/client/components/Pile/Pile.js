import React from 'react';
import PropTypes from 'prop-types';

import ActiveCard from '../ActiveCard';
import PileDropZone from '../PileDropZone';

const Pile = ({ cards, origin }) => {
	let cardDisplay = [];
	
	const reverseCards = cards.slice().reverse();
	for (let i = 0; i < reverseCards.length; i++) {
		const marginTop = i * 8;
		if (i === reverseCards.length-1) {
			const activeCardClassName = `z-10 absolute mt-${marginTop}`;
			const pileDropClassName = `z-10 absolute mt-${marginTop+8}`;
			cardDisplay.push(<ActiveCard card={reverseCards[i]} className={activeCardClassName} origin={origin} key={i+'active'}/>);
			cardDisplay.push(<PileDropZone target={origin} className={pileDropClassName} key={i+'pileDropZone'} />);
		} else {
			if (reverseCards[i].turned) {
				const className = `z-10 absolute mt-${marginTop}`;
				cardDisplay.push(<ActiveCard className={className} card={reverseCards[i]} origin={origin} key={i+'active'} key={i+'activeTurned'}/>);
			} else {
				const className = `absolute mt-${marginTop}`;
				cardDisplay.push(<img src="./cards/red_back.png" className={className} alt="Deck back" key={origin+i}/>);
			}
		}
	}

	if (cards.length > 0) {
		return (
			<div className="relative w-32">
				{cardDisplay}
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
