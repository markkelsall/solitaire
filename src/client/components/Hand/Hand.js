import React from "react";

const Hand = ({ showNext, resetWaste, stockDeck }) => {

    const onClickFunc = () => {
        if (stockDeck.length === 0) {
            resetWaste();
        } else {
            showNext();
        }
    }

    return (
        <div className='w-32 h-48 border-dashed border-2 border-black rounded-lg'>
            <button onClick={onClickFunc} className="w-32 h-48" data-testid="hand-testid">
                {stockDeck.length > 0
                    ? <img src="./cards/red_back.png" className="w-32 h48" />
                    : <img src="./cards/refresh.png" className="w-32 h48" />
                }
            </button>
        </div>
    );
}

export default Hand;
