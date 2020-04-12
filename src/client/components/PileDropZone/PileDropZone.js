import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import AppContext from '../../contexts/AppContext';

import checkIfCardCanBeMovedToPile from './checkIfCardCanBeMovedToPile';

const PileDropZone = ({ target, className }) => {
  const appState = useContext(AppContext);
  const { moveCardToPile } = appState;

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'CARD',
    canDrop: (item) => {
      const pileList = appState[target];
      return checkIfCardCanBeMovedToPile(pileList, item);
    },
    drop: item => moveCardToPile(item, target),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });
  let backgroundColor = '';
  let opacity = 1;
  if (isOver && canDrop) {
    backgroundColor = 'darkgreen';
    opacity = 0.5;
    className += ' z-10 w-32 h-48';
  } else if (!isOver && canDrop) {
    backgroundColor = 'darkkhaki';
    opacity = 0.5;
    className += ' z-10 w-32 h-48';
  }

  return (
    <div ref={drop} className={className} style={{ backgroundColor, opacity }} />
  );
};

export default PileDropZone;
