import React from "react";
import { useDrag } from "react-dnd";

const Card = ({ card, className }) => {

    const [{ isDragging }, drag] = useDrag({
        item: { name, type: "CARD" },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                alert(`You dropped ${item.name} into ${dropResult.name}!`);
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
