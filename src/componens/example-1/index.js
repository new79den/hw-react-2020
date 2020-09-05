import React, {useState} from 'react';

export const Counter = ({source}) => {
    const [count, setCount] = useState(source);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);

    return (
        <div>
            <button onClick={increase} data-testid='increment'>+</button>
            <p data-testid='counterValue'>{count}</p>
            <button onClick={decrease} data-testid='decrement'>-</button>
        </div>
    )
}
