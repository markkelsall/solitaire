import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import AppContext from '../../contexts/AppContext';

import checkIfCardCanBeMovedToPile from './checkIfCardCanBeMovedToPile';

const PileDropZone = ({ target, className }) => {

	const appState = useContext(AppContext);
	const { moveCardToPile } = appState;

  const [{ canDrop, isOver }, drop] = useDrop({
		accept: 'CARD',
		canDrop: (_) => (item, target) => {
			const pileList = appState[target];
			checkIfCardCanBeMovedToPile(pileList, item);
		},
		drop: item => moveCardToPile(item, target),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
	});
	let backgroundColor = '';
	let opacity = 1;
	let heightClassName = "";
	let zIndex = '';

	if (isOver && canDrop) {
		backgroundColor = 'darkgreen';
		opacity = 0.5;
		heightClassName = 'w-32 h-48';
		zIndex = 'z-10';
  } else if (!isOver && canDrop) {
		backgroundColor = 'darkkhaki';
		opacity = 0.5;
		heightClassName = 'w-32 h-48';
		zIndex = 'z-10';
	}
	
  return (
    <div ref={drop} className={className} style={{ backgroundColor, opacity }}>
			<div className={heightClassName} />
    </div>
  );
};

export default PileDropZone;
