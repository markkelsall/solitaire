import React from "react";

const Waste = ({ wasteDeck }) => {
    let imgUrl;
    if (wasteDeck.length > 0) {
        imgUrl = `./cards/${wasteDeck[0].imageUrl}`;
    }
    return (
        <div className='w-32 h-48 border-dashed border-2 border-black rounded-lg'>
            {wasteDeck.length > 0 ? <img src={imgUrl} className="w-32 h48" data-testid="waste-img-url" /> : null}
        </div>
    );
}

export default Waste;