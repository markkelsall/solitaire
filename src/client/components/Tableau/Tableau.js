import React from "react";
import Pile from "../Pile/Pile";

const Tableau = () => {
  return (
    <div className='row'>
      <div className='ma-medium'>
        <Pile />
      </div>
      <div className='ma-medium'>
        <Pile />
      </div>
      <div className='ma-medium'>
        <Pile />
        </div>
      <div className='ma-medium'>
        <Pile />
      </div>
      <div className='ma-medium'>
        <Pile />
      </div>
      <div className='ma-medium'>
        <Pile />
      </div>
      <div className='ma-medium'>
        <Pile />
      </div>
    </div>
  );
}

export default Tableau;
