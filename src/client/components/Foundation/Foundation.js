import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import AppContext from '../../contexts/AppContext';

const Foundation = ({ foundationList, target, moveCardToFoundations }) => {

	const appState = useContext(AppContext);
	const checkIfCardCanBeMovedToFoundations = (item, target) => {
		const foundationList = appState[target];
		if (foundationList.length === 0 && item.card.number === "A") {
			return true;
		}
	
		if (foundationList.length >= 1) {
			const lastFoundationCard = foundationList[foundationList.length-1];
			if (item.card.suit === lastFoundationCard.suit) {
				if (parseInt(item.card.number) === 2 && lastFoundationCard.number === "A") {
					return true;
				}
				if (parseInt(item.card.number) === parseInt(lastFoundationCard.number)+1) {
					return true;
				}
				if (item.card.number === "J" && lastFoundationCard.number === "10") {
					return true;
				}
				if (item.card.number === "Q" && lastFoundationCard.number === "J") {
					return true;
				}
				if (item.card.number === "K" && lastFoundationCard.number === "Q") {
					return true;
				}
			}
		}
		return false;
	};

  const [{ canDrop, isOver }, drop] = useDrop({
		accept: 'CARD',
		canDrop: item => checkIfCardCanBeMovedToFoundations(item, target),
		drop: item => moveCardToFoundations(item, target),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });
  let backgroundColor = '';
  if (isOver && canDrop) {
    backgroundColor = 'darkgreen';
  } else if (!isOver && canDrop) {
    backgroundColor = 'darkkhaki';
	}
	
	let url;
	if (foundationList.length > 0) {
		url = `./cards/${foundationList[foundationList.length-1].imageUrl}`;
	}
  return (
    <div ref={drop} className="ml-4" style={{ backgroundColor }}>
      {foundationList.length > 0 
			? 
				<img src={url} alt="card" className="w-32 h-48" />
			: 
				<div className="w-32 h-48 border-dashed border-2 border-black rounded-lg" />}
    </div>
  );
};

export default Foundation;
