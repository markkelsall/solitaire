import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import Pile from "../Pile/Pile";

const Tableau = () => {

  const { pileOne, pileTwo, pileThree, pileFour, pileFive, pileSix, pileSeven } = useContext(AppContext);

  return (
    <div className='flex flex-row'>
      <div className='ml-4'>
        <Pile cards={pileOne} />
      </div>
      <div className='ml-4'>
        <Pile cards={pileTwo} />
      </div>
      <div className='ml-4'>
        <Pile cards={pileThree} />
      </div>
      <div className='ml-4'>
        <Pile cards={pileFour} />
      </div>
      <div className='ml-4'>
        <Pile cards={pileFive} />
      </div>
      <div className='ml-4'>
        <Pile cards={pileSix} />
      </div>
      <div className='ml-4'>
        <Pile cards={pileSeven} />
      </div>
    </div>
  );
}

export default Tableau;
