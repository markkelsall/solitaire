import React from 'react';
import PropTypes from 'prop-types';

const Waste = ({ imgUrl }) => (
  <div className="w-32 h-48 border-dashed border-2 border-black rounded-lg">
    {imgUrl ? <img src={`./cards/${imgUrl}`} className="w-32 h48" data-testid="waste-img-url" alt="card" /> : null}
  </div>
);

Waste.propTypes = {
  imgUrl: PropTypes.string
};

Waste.defaultProps = {
  imgUrl: null
};

export default Waste;
