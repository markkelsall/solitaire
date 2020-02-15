import React from "react";
import Pile from "../Pile/Pile";

const Tableau = ({ deck }) => {

  let pileOne;
  let pileTwo;
  let pileThree;
  let pileFour;
  let pileFive;
  let pileSix;
  let pileSeven;

  if (deck) {
    pileOne = deck.slice(0, 1);
    pileTwo = deck.slice(1, 3);
    pileThree = deck.slice(3, 6);
    pileFour = deck.slice(6, 10);
    pileFive = deck.slice(10, 15);
    pileSix = deck.slice(15, 21);
    pileSeven = deck.slice(21, 28);
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