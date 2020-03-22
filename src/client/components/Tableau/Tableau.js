import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import Pile from '../Pile/Pile';

const Tableau = () => {
  const {
    pileOne, pileTwo, pileThree, pileFour, pileFive, pileSix, pileSeven
  } = useContext(AppContext);

  return (
    <div className="flex flex-row">
      <div className="ml-4">
        <Pile cards={pileOne} origin='pileOne' />
      </div>
      <div className="ml-4">
        <Pile cards={pileTwo} origin='pileTwo' />
      </div>
      <div className="ml-4">
        <Pile cards={pileThree} origin='pileThree' />
      </div>
      <div className="ml-4">
        <Pile cards={pileFour} origin='pileFour' />
      </div>
      <div className="ml-4">
        <Pile cards={pileFive} origin='pileFive' />
      </div>
      <div className="ml-4">
        <Pile cards={pileSix} origin='pileSix' />
      </div>
      <div className="ml-4">
        <Pile cards={pileSeven} origin='pileSeven' />
      </div>
    </div>
  );
};

export default Tableau;
