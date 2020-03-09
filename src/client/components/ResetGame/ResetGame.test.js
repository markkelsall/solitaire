import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ResetGame from './ResetGame';

describe('ResetGame', () => {
  it('should call shuffleCards if it is passed in', () => {
    const test = jest.fn();
    const { getByTestId } = render(<ResetGame shuffleDeck={test} />);
    fireEvent.click(getByTestId('resetGame'));
    expect(test).toHaveBeenCalled();
  });
});
