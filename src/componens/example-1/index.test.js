import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Counter} from './';

const init = (source) => {
    const {getByTestId} = render(<Counter source={source}/>);
    const counter = getByTestId('counterValue');
    const increment = getByTestId('increment');
    const decrement = getByTestId('decrement');

    return {
        counter,
        increment,
        decrement
    }
}

describe('Counter component', () => {
    test('Initial value should be received from property source', () => {
        const source = 0;
        const {counter} = init(source);
        const value = Number(counter.textContent);
        expect(value).toBe(source)
    });

    test('increase function should increase value by 1', () => {
        const source = 0;
        const {counter, increment} = init(source);
        const prevCounter = Number(counter.textContent);
        const incrementValue = prevCounter + 1;
        fireEvent.click(increment);
        const currentValue = Number(counter.textContent);
        expect(currentValue).toBe(incrementValue);
    });

    test('decrease function should decrease value by -1', () => {
        const source = 0;
        const {counter, decrement} = init(source);
        const prevCounter = Number(counter.textContent);
        const incrementValue = prevCounter - 1;
        fireEvent.click(decrement);
        const currentValue = Number(counter.textContent);
        expect(currentValue).toBe(incrementValue);
    });
})