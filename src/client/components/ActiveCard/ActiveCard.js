import React from 'react';
import PropTypes from 'prop-types';

import { useDrag } from 'react-dnd';

const ActiveCard = ({ card, className, origin, testId }) => {

  const [{ isDragging }, drag] = useDrag({
    item: { name: card.number, type: 'CARD', card, origin },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const url = `./cards/${card.imageUrl}`;
  const classes = `w-32 h48 ${className}`;

  const opacity = isDragging ? 0 : 1;

  return (<img ref={drag} src={url} className={classes} style={{ opacity }} alt="card" data-testid={testId} />);
};

ActiveCard.propTypes = {
  card: PropTypes.object.isRequired,
  className: PropTypes.string
};

ActiveCard.defaultProps = {
  className: null
};

export default ActiveCard;
