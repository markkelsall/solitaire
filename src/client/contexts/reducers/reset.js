export default state => {
	return {
		...state,
		wasteDeck: [],
		stockDeck: [...state.wasteDeck]
	}
};
