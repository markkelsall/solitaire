export default state => ({
  ...state,
  wasteDeck: [],
  stockDeck: [...state.wasteDeck]
});
