import React from "react";
import Pile from "../Pile/Pile";

const Tableau = () => {
  return (
    <div className='flex flex-row'>
      <div className='ml-4'>
        <Pile />
      </div>
      <div className='ml-4'>
        <Pile />
      </div>
      <div className='ml-4'>
        <Pile />
      </div>
      <div className='ml-4'>
        <Pile />
      </div>
      <div className='ml-4'>
        <Pile />
      </div>
      <div className='ml-4'>
        <Pile />
      </div>
      <div className='ml-4'>
        <Pile />
      </div>
    </div>
  );
}

export default Tableau;