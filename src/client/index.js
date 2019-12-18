import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shuffleDeck } from "./utils/deck";

ReactDOM.render(<App shuffleDeck={shuffleDeck} />, document.getElementById('root'));