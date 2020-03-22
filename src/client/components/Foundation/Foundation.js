import React from 'react';
import { useDrop } from 'react-dnd';

const Foundation = ({ foundationList, target, checkIfCardCanBeMovedToFoundations, moveCardToFoundations }) => {
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
		console.log('drop it!!!');
    backgroundColor = 'darkgreen';
  } else if (!isOver && canDrop) {
		console.log('drop it over here!');
    backgroundColor = 'darkkhaki';
	}
	
	let url;
	if (foundationList.length > 0) {
		url = `./cards/${foundationList[0].imageUrl}`;
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
