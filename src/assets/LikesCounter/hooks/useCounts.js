import {useState} from 'react';

export const useCounts = (initValue) => {
    const [count, setCount] = useState(initValue);

    const increaseCount = () => {
        setCount(prevCount => prevCount+1);
    }

    const decreaseCount = () => {
        setCount(prevCount => prevCount-1);
    }

    return {count, increaseCount, decreaseCount};
}