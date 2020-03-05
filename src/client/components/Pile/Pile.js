import React from "react";

const Pile = ({ cards }) => {
    if (cards.length === 1) {
        const url = `./cards/${cards[0].imageUrl}`;
        return (<img src={url} className="w-32 h48" />);
    }

    if (cards.length === 2) {
        const url = `./cards/${cards[0].imageUrl}`;
        return (
            <div className="relative w-32">
                <img src="./cards/red_back.png" className="w-32 h-48 absolute" />
                <img src={url} className="w-32 h48 z-10 absolute mt-4" />
            </div>
        );
    }

    if (cards.length === 3) {
        const url = `./cards/${cards[0].imageUrl}`;
        return (
            <div className="relative w-32">
                <img src="./cards/red_back.png" className="w-32 h-48 absolute" />
                <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-4" />
                <img src={url} className="w-32 h48 z-10 absolute mt-8" />
            </div>
        );
    }

    if (cards.length === 4) {
        const url = `./cards/${cards[0].imageUrl}`;
        return (
            <div className="relative w-32">
                <img src="./cards/red_back.png" className="w-32 h-48 absolute" />
                <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-4" />
                <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-8" />
                <img src={url} className="w-32 h48 z-10 absolute mt-12" />
            </div>
        );
    }

    if (cards.length === 5) {
        const url = `./cards/${cards[0].imageUrl}`;
        return (
            <div className="relative w-32">
                <img src="./cards/red_back.png" className="w-32 h-48 absolute" />
                <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-4" />
                <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-8" />
                <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-12" />
                <img src={url} className="w-32 h48 z-10 absolute mt-16" />
            </div>
        );
    }

    if (cards.length === 6) {
        const url = `./cards/${cards[0].imageUrl}`;
        return (
            <div className="relative w-32">
                <img src="./cards/red_back.png" className="w-32 h-48 absolute" />
                <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-4" />
                <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-8" />
                <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-12" />
                <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-16" />
                <img src={url} className="w-32 h48 z-10 absolute mt-20" />
            </div>
        );
    }

    if (cards.length === 7) {
        const url = `./cards/${cards[0].imageUrl}`;
        return (
            <div className="relative w-32">
                <img src="./cards/red_back.png" className="w-32 h-48 absolute" />
                <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-4" />
                <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-8" />
                <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-12" />
                <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-16" />
                <img src="./cards/red_back.png" className="w-32 h-48 absolute mt-20" />
                <img src={url} className="w-32 h48 z-10 absolute mt-24" />
            </div>
        );
    }
}

export default Pile;