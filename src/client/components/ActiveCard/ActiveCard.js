import React, { useContext } from "react";
import { useDrag } from "react-dnd";

import AppContext from "../../contexts/AppContext";

const Card = ({ card, className }) => {

    const { checkIfCardCanBeMovedToFoundations } = useContext(AppContext);

    const [{ isDragging }, drag] = useDrag({
        item: { name: card.number, type: "CARD", card },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                checkIfCardCanBeMovedToFoundations();
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const url = `./cards/${card.imageUrl}`;
    className = `w-32 h48 z-10 ${className}`;

    const opacity = isDragging ? 0 : 1;

    return (<img ref={drag} src={url} className={className} style={{ opacity }} />);
}

export default Card;
