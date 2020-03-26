import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shuffleDeck, generateDeck } from './utils/deck';

const deck = generateDeck();

ReactDOM.render(<App shuffleDeck={shuffleDeck} deck={deck} />, document.getElementById('root'));
