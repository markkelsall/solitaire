import React, { useContext } from "react";
import AppContext from '../../contexts/AppContext';
import Tableau from "./";

const AppTableauConsumer = () => {
    const { tableauDeck } = useContext(AppContext);
    return (<Tableau tableauDeck={tableauDeck} />)
}

export default AppTableauConsumer;
