import React from 'react';
import { render } from '@testing-library/react';
import Waste from './Waste';

describe('Waste', () => {
  it('should show the first card in the array', () => {
    const wasteDeck = [{
      imageUrl: 'test/image/url'
    }];

    const { getByTestId } = render(<Waste imgUrl={wasteDeck[0].imageUrl} />);
    expect(getByTestId('waste-img-url')).toHaveProperty('src', 'http://localhost/cards/test/image/url');
  });

  it('should show empty if no imgUrl passed in', () => {
    const wasteDeck = [];

    const { queryByTestId } = render(<Waste />);
    expect(queryByTestId('waste-img-url')).toBeNull();
  });
});
