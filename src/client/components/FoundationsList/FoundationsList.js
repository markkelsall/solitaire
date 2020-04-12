import React, { useContext } from 'react';
import Foundation from '../Foundation';
import AppContext from '../../contexts/AppContext';

const FoundationsList = () => {
  const {
    foundationOne, foundationTwo, foundationThree, foundationFour, moveCardToFoundations
  } = useContext(AppContext);

  return (
    <div className="flex flex-row">
      <Foundation foundationList={foundationOne} target="foundationOne" moveCardToFoundations={moveCardToFoundations} />
      <Foundation foundationList={foundationTwo} target="foundationTwo" moveCardToFoundations={moveCardToFoundations} />
      <Foundation foundationList={foundationThree} target="foundationThree" moveCardToFoundations={moveCardToFoundations} />
      <Foundation foundationList={foundationFour} target="foundationFour" moveCardToFoundations={moveCardToFoundations} />
    </div>
  );
};

export default FoundationsList;
