import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import Hand from "./";

const AppHandConsumer = () => {
    const { showNext, resetWaste, stockDeck } = useContext(AppContext);
    return (<Hand stockDeck={stockDeck} showNext={showNext} resetWaste={resetWaste} />);
}

export default AppHandConsumer;