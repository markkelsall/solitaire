import React from 'react';
import { useDrop } from 'react-dnd';

const Foundation = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: () => ({ name: 'FOUNDATION' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  let backgroundColor = '';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  return (
    <div ref={drop} className="ml-4" style={{ backgroundColor }}>
      <div className="w-32 h-48 border-dashed border-2 border-black rounded-lg" />
    </div>
  );
};

export default Foundation;
