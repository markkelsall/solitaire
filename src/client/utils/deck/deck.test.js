import { generateDeck } from './index';

describe('deck', () => {
  it('should generate a deck of cards with image urls', () => {
    const deck = generateDeck();
    expect(deck[0]).toStrictEqual({ number: 'A', suit: 'HEARTS', imageUrl: 'AH.png' });
  });
});
