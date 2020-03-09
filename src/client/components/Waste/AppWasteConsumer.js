import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import Waste from '.';

const AppWasteConsumer = () => {
  const { wasteDeck } = useContext(AppContext);
  return (<Waste wasteDeck={wasteDeck} />);
};

export default AppWasteConsumer;
