import React from 'react';
import PropTypes from 'prop-types';

import ActiveCard from '../ActiveCard';

const Waste = ({ card }) => (
  <div className="w-32 h-48">
    {card
		  ? <ActiveCard card={card} origin="waste" testId="waste-img-url" />
		  : null
		}
  </div>
);

Waste.propTypes = {
  imgUrl: PropTypes.string
};

Waste.defaultProps = {
  imgUrl: null
};

export default Waste;
