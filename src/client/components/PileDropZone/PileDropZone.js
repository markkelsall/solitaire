import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import AppContext from '../../contexts/AppContext';

const PileDropZone = ({ target, className }) => {

	const appState = useContext(AppContext);
	const { moveCardToPile } = appState;

	const checkIfCardCanBeMovedToPile = (item, target) => {
		const pileList = appState[target];
		if (pileList.length >= 1) {
			const lastPileCard = pileList[0];
			if (parseInt(item.card.number)+1 === parseInt(lastPileCard.number)) {
				if (item.card.suit === "HEARTS" && (lastPileCard.suit === "SPADES" || lastPileCard.suit === "CLUBS")) {
					return true;
				}
				if (item.card.suit === "DIAMONDS" && (lastPileCard.suit === "SPADES" || lastPileCard.suit === "CLUBS")) {
					return true;
				}
				if (item.card.suit === "SPADES" && (lastPileCard.suit === "HEARTS" || lastPileCard.suit === "DIAMONDS")) {
					return true;
				}
				if (item.card.suit === "CLUBS" && (lastPileCard.suit === "HEARTS" || lastPileCard.suit === "DIAMONDS")) {
					return true;
				}
			}
		}
		return false;
	};

  const [{ canDrop, isOver }, drop] = useDrop({
		accept: 'CARD',
		canDrop: item => checkIfCardCanBeMovedToPile(item, target),
		drop: item => moveCardToPile(item, target),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });
	let backgroundColor = '';
	let opacity = 1;
	let heightClassName = "";

	if (isOver && canDrop) {
		backgroundColor = 'darkgreen';
		opacity = 0.5;
		heightClassName = "w-32 h-48";
  } else if (!isOver && canDrop) {
		backgroundColor = 'darkkhaki';
		opacity = 0.5;
		heightClassName = "w-32 h-48";
	}
	
  return (
    <div ref={drop} className={className} style={{ backgroundColor, opacity }}>
			<div className={heightClassName} />
    </div>
  );
};

export default PileDropZone;
