import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Hand from './Hand';

describe('Hand', () => {
  it('should call showNext if there are more cards to show', () => {
    const showNext = jest.fn();
    const resetWaste = jest.fn();
    const stockDeck = [{}];

    const { getByTestId } = render(<Hand showNext={showNext} resetWaste={resetWaste} stockDeck={stockDeck} />);
    fireEvent.click(getByTestId('hand-testid'));
    expect(showNext).toHaveBeenCalled();
  });

  it('should call resetWaste if there are more cards to show', () => {
    const showNext = jest.fn();
    const resetWaste = jest.fn();
    const stockDeck = [];

    const { getByTestId } = render(<Hand showNext={showNext} resetWaste={resetWaste} stockDeck={stockDeck} />);
    fireEvent.click(getByTestId('hand-testid'));
    expect(resetWaste).toHaveBeenCalled();
  });
});
