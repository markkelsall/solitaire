import { generateDeck } from './index';
describe("deck", () => {
    it("should generate a deck of cards", () => {
        const deck = generateDeck();
        expect(deck[0]).toStrictEqual({ "number": "A", "suit": "HEARTS", "imageUrl": "AH.png" });
    });
});