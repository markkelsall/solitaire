import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import Waste from '.';

const AppWasteConsumer = () => {
  const { wasteDeck } = useContext(AppContext);
  if (wasteDeck.length > 0) {
    return <Waste imgUrl={wasteDeck[0].imageUrl} />;
  }
  return <Waste />;
};

export default AppWasteConsumer;
