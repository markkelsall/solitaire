export default (state, action) => {
  const wasteDeck = [...state.wasteDeck];
  const pileOne = [...state.pileOne];
  const pileTwo = [...state.pileTwo];
  const pileThree = [...state.pileThree];
  const pileFour = [...state.pileFour];
  const pileFive = [...state.pileFive];
  const pileSix = [...state.pileSix];
  const pileSeven = [...state.pileSeven];

  const { card } = action.data.item;
  card.turned = true;

  if (action.data.target === 'pileOne') {
    pileOne.unshift(card);
  }
  if (action.data.target === 'pileTwo') {
    pileTwo.unshift(card);
  }
  if (action.data.target === 'pileThree') {
    pileThree.unshift(card);
  }
  if (action.data.target === 'pileFour') {
    pileFour.unshift(card);
  }
  if (action.data.target === 'pileFive') {
    pileFive.unshift(card);
  }
  if (action.data.target === 'pileSix') {
    pileSix.unshift(card);
  }
  if (action.data.target === 'pileSeven') {
    pileSeven.unshift(card);
  }

  if (action.data.item.origin === 'waste') {
    wasteDeck.shift();
  }
  if (action.data.item.origin === 'pileOne') {
    pileOne.shift();
  }
  if (action.data.item.origin === 'pileTwo') {
    pileTwo.shift();
  }
  if (action.data.item.origin === 'pileThree') {
    pileThree.shift();
  }
  if (action.data.item.origin === 'pileFour') {
    pileFour.shift();
  }
  if (action.data.item.origin === 'pileFive') {
    pileFive.shift();
  }
  if (action.data.item.origin === 'pileSix') {
    pileSix.shift();
  }
  if (action.data.item.origin === 'pileSeven') {
    pileSeven.shift();
  }
  return {
    ...state,
    pileOne,
    pileTwo,
    pileThree,
    pileFour,
    pileFive,
    pileSix,
    pileSeven,
    wasteDeck
  };
};
