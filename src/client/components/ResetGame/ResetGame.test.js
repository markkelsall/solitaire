import React from "react";
import ResetGame from './ResetGame';
import { render, fireEvent } from '@testing-library/react'

describe("ResetGame", () => {
    it("should call shuffleCards if it is passed in", () => {
        const test = jest.fn();
        const { getByTestId } = render(<ResetGame shuffleDeck={test} />);
        fireEvent.click(getByTestId('resetGame'));
        expect(test).toHaveBeenCalled();
    });
});