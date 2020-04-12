import checkIfCardCanBeMovedToPile from './checkIfCardCanBeMovedToPile';

describe('checkIfCardCanBeMovedToPile', () => {
  it('should return false if the pile list is empty', () => {
    const response = checkIfCardCanBeMovedToPile([], {});
    expect(response).toBe(false);
  });

  it("should return false when the number of the pile +1, doesn't match the card dragged", () => {
    const pile = [
      {
        number: '3'
      }
    ];
    const item = {
      card: {
        number: '4'
      }
    };
    const response = checkIfCardCanBeMovedToPile(pile, item);
    expect(response).toBe(false);
  });

  it('should return true when the card suit is HEARTS and the last card suit is SPADES', () => {
    const pile = [
      {
        number: '4',
        suit: 'SPADES'
      }
    ];
    const item = {
      card: {
        number: '3',
        suit: 'HEARTS'
      }
    };
    const response = checkIfCardCanBeMovedToPile(pile, item);
    expect(response).toBe(true);
  });
  it('should return true when the card suit is HEARTS and the last card suit is CLUBS', () => {
    const pile = [
      {
        number: '4',
        suit: 'SPADES'
      }
    ];
    const item = {
      card: {
        number: '3',
        suit: 'HEARTS'
      }
    };
    const response = checkIfCardCanBeMovedToPile(pile, item);
    expect(response).toBe(true);
  });
  it('should return true when the card suit is DIAMONDS and the last card suit is SPADES', () => {
    const pile = [
      {
        number: '4',
        suit: 'SPADES'
      }
    ];
    const item = {
      card: {
        number: '3',
        suit: 'DIAMONDS'
      }
    };
    const response = checkIfCardCanBeMovedToPile(pile, item);
    expect(response).toBe(true);
  });
  it('should return true when the card suit is DIAMONDS and the last card suit is CLUBS', () => {
    const pile = [
      {
        number: '4',
        suit: 'CLUBS'
      }
    ];
    const item = {
      card: {
        number: '3',
        suit: 'DIAMONDS'
      }
    };
    const response = checkIfCardCanBeMovedToPile(pile, item);
    expect(response).toBe(true);
  });
  it('should return true when the card suit is SPADES and the last card suit is HEARTS', () => {
    const pile = [
      {
        number: '4',
        suit: 'HEARTS'
      }
    ];
    const item = {
      card: {
        number: '3',
        suit: 'SPADES'
      }
    };
    const response = checkIfCardCanBeMovedToPile(pile, item);
    expect(response).toBe(true);
  });
  it('should return true when the card suit is SPADES and the last card suit is DIAMONDS', () => {
    const pile = [
      {
        number: '4',
        suit: 'DIAMONDS'
      }
    ];
    const item = {
      card: {
        number: '3',
        suit: 'SPADES'
      }
    };
    const response = checkIfCardCanBeMovedToPile(pile, item);
    expect(response).toBe(true);
  });
  it('should return true when the card suit is CLUBS and the last card suit is HEARTS', () => {
    const pile = [
      {
        number: '4',
        suit: 'HEARTS'
      }
    ];
    const item = {
      card: {
        number: '3',
        suit: 'CLUBS'
      }
    };
    const response = checkIfCardCanBeMovedToPile(pile, item);
    expect(response).toBe(true);
  });
  it('should return true when the card suit is CLUBS and the last card suit is DIAMONDS', () => {
    const pile = [
      {
        number: '4',
        suit: 'DIAMONDS'
      }
    ];
    const item = {
      card: {
        number: '3',
        suit: 'CLUBS'
      }
    };
    const response = checkIfCardCanBeMovedToPile(pile, item);
    expect(response).toBe(true);
  });
  it("should return false when suits aren't compatible ", () => {
    const pile = [
      {
        number: '4',
        suit: 'HEARTS'
      }
    ];
    const item = {
      card: {
        number: '3',
        suit: 'HEARTS'
      }
    };
    const response = checkIfCardCanBeMovedToPile(pile, item);
    expect(response).toBe(false);
  });
});
