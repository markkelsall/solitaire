import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import Pile from "../Pile/Pile";

const Tableau = () => {

  const { tableauDeck, checkIfCardCanBeMovedToFoundations } = useContext(AppContext);

  let pileOne;
  let pileTwo;
  let pileThree;
  let pileFour;
  let pileFive;
  let pileSix;
  let pileSeven;

  if (tableauDeck) {
    pileOne = tableauDeck.slice(0, 1);
    pileTwo = tableauDeck.slice(1, 3);
    pileThree = tableauDeck.slice(3, 6);
    pileFour = tableauDeck.slice(6, 10);
    pileFive = tableauDeck.slice(10, 15);
    pileSix = tableauDeck.slice(15, 21);
    pileSeven = tableauDeck.slice(21, 28);
  }

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
