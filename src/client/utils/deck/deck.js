const cardsList = ["ACE","2","3","4","5","6","7","8","9","10","JACK","QUEEN","KING"];

const buildSuit = suit => {
    return cardsList.map(number => {
        return {
            suit,
            number
        }
    });
};

export const generateDeck = () => {
    const hearts = buildSuit('HEARTS');
    const diamonds = buildSuit('DIAMONDS');
    const spades = buildSuit('SPADES');
    const clubs = buildSuit('CLUBS');
    return [...hearts, ...diamonds, ...spades, ...clubs];
};

//Fisher-Yates algorithm
export const shuffleDeck = () => {
    const deck = generateDeck();
    
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
};
