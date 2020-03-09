import React from 'react';
import { render } from '@testing-library/react';
import Waste from './Waste';

describe('Waste', () => {
  it('should show the first card in the array', () => {
    const wasteDeck = [{
      imageUrl: 'test/image/url'
    }];

    const { getByTestId } = render(<Waste wasteDeck={wasteDeck} />);
    expect(getByTestId('waste-img-url')).toHaveProperty('src', 'http://localhost/cards/test/image/url');
  });

  it('should show empty if no wasteDeck available', () => {
    const wasteDeck = [];

    const { queryByTestId } = render(<Waste wasteDeck={wasteDeck} />);
    expect(queryByTestId('waste-img-url')).toBeNull();
  });
});
