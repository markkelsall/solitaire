export default (state, action) => {
	const foundationOne = [...state.foundationOne];
	const foundationTwo = [...state.foundationTwo];
	const foundationThree = [...state.foundationThree];
	const foundationFour = [...state.foundationFour];
	const wasteDeck = [...state.wasteDeck];

	if (action.data.target === 'foundationOne') {
		foundationOne.push(action.data.item.card);
	}
	if (action.data.target === 'foundationTwo') {
		foundationTwo.push(action.data.item.card);
	}
	if (action.data.target === 'foundationThree') {
		foundationThree.push(action.data.item.card);
	}
	if (action.data.target === 'foundationFour') {
		foundationFour.push(action.data.item.card);
	}

	const pileOne = [...state.pileOne];
	const pileTwo = [...state.pileTwo];
	const pileThree = [...state.pileThree];
	const pileFour = [...state.pileFour];
	const pileFive = [...state.pileFive];
	const pileSix = [...state.pileSix];
	const pileSeven = [...state.pileSeven];

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

	if (action.data.item.origin === 'waste') {
		wasteDeck.shift();
	}
	return {
		...state,
		foundationOne,
		foundationTwo,
		foundationThree,
		foundationFour,
		pileOne,
		pileTwo,
		pileThree,
		pileFour,
		pileFive,
		pileSix,
		pileSeven,
		wasteDeck
	}
}
