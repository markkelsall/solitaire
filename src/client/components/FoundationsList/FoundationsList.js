import React, { useContext } from 'react';
import Foundation from '../Foundation';
import AppContext from '../../contexts/AppContext';

const FoundationsList = () => {
	const { foundationOne, foundationTwo, foundationThree, foundationFour, checkIfCardCanBeMovedToFoundations, moveCardToFoundations } = useContext(AppContext);

  return (
		<div className="flex flex-row">
    	<Foundation foundationList={foundationOne} target='foundationOne' checkIfCardCanBeMovedToFoundations={checkIfCardCanBeMovedToFoundations} moveCardToFoundations={moveCardToFoundations} />
    	<Foundation foundationList={foundationTwo} target='foundationTwo' checkIfCardCanBeMovedToFoundations={checkIfCardCanBeMovedToFoundations} moveCardToFoundations={moveCardToFoundations} />
    	<Foundation foundationList={foundationThree} target='foundationThree' checkIfCardCanBeMovedToFoundations={checkIfCardCanBeMovedToFoundations} moveCardToFoundations={moveCardToFoundations} />
    	<Foundation foundationList={foundationFour} target='foundationFour' checkIfCardCanBeMovedToFoundations={checkIfCardCanBeMovedToFoundations} moveCardToFoundations={moveCardToFoundations} />
		</div>
	)
};

export default FoundationsList;
