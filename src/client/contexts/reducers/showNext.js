export default state => {
	const newStockDeck = [...state.stockDeck];
	const card = newStockDeck.pop();
	const newWasteDeck = [...state.wasteDeck];
	newWasteDeck.unshift(card);
	return {
		...state,
		stockDeck: newStockDeck,
		wasteDeck: newWasteDeck
	};
}
