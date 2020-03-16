import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { useDrag } from 'react-dnd';

import AppContext from '../../contexts/AppContext';

const Card = ({ card, className }) => {
  const { checkIfCardCanBeMovedToFoundations } = useContext(AppContext);

  const [{ isDragging }, drag] = useDrag({
    item: { name: card.number, type: 'CARD', card },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        checkIfCardCanBeMovedToFoundations();
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const url = `./cards/${card.imageUrl}`;
  const classes = `w-32 h48 z-10 ${className}`;

  const opacity = isDragging ? 0 : 1;

  return (<img ref={drag} src={url} className={classes} style={{ opacity }} alt="card" />);
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  className: PropTypes.string
};

Card.defaultProps = {
  className: null
};

export default Card;
