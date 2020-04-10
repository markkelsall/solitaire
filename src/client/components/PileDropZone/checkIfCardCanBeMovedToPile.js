export default (pileList, item) => {
	if (!pileList || pileList.length == 0) {
		return false;
	};

	const lastPileCard = pileList[0];
	if (parseInt(item.card.number)+1 !== parseInt(lastPileCard.number)) {
		return false;
	}

	if (item.card.suit === "HEARTS" && (lastPileCard.suit === "SPADES" || lastPileCard.suit === "CLUBS")) {
		return true;
	}
	if (item.card.suit === "DIAMONDS" && (lastPileCard.suit === "SPADES" || lastPileCard.suit === "CLUBS")) {
		return true;
	}
	if (item.card.suit === "SPADES" && (lastPileCard.suit === "HEARTS" || lastPileCard.suit === "DIAMONDS")) {
		return true;
	}
	if (item.card.suit === "CLUBS" && (lastPileCard.suit === "HEARTS" || lastPileCard.suit === "DIAMONDS")) {
		return true;
	}
	return false;
};