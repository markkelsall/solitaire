import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shuffleDeck } from './utils/deck';

const deck = shuffleDeck();

ReactDOM.render(<App shuffleDeck={shuffleDeck} deck={deck} />, document.getElementById('root'));
