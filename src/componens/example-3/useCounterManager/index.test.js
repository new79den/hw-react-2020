import {renderHook, act} from '@testing-library/react-hooks';
import {useCounterManager} from './';

describe('useCounterManager custom hook', () => {
    test('Init value should be the same as count value from returned object', () => {
        const source = 0;
        const returnedData = renderHook(() => useCounterManager(source));
        const counterValue = returnedData.result.current.count;

        expect(counterValue).toBe(source);
    });

    test('Increase function should increase value by 1', () => {
        const source = 0;
        const returnedData= renderHook(() => useCounterManager(source));
        const prevCount = returnedData.result.current.count;
        const incrementedValue = prevCount + 1;
        const increase = returnedData.result.current.increase;
        act(increase);
        const increasedValue = returnedData.result.current.count;
        expect(incrementedValue).toBe(increasedValue);
    })

    test('Decrease function should increase value by -1', () => {
        const source = 0;
        const returnedData= renderHook(() => useCounterManager(source));
        const prevCount = returnedData.result.current.count;
        const incrementedValue = prevCount - 1;
        const increase = returnedData.result.current.decrease;
        act(increase);
        const increasedValue = returnedData.result.current.count;
        expect(incrementedValue).toBe(increasedValue);
    })
})
