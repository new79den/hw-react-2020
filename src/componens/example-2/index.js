import React, {useState} from 'react';

export const Counter = ({source}) => {
    const [count, setCount] = useState(source);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);

    return (
        <div>
            <button onClick={increase} id='increment'>+</button>
            <p>{count}</p>
            <button onClick={decrease} id='decrement'>-</button>
        </div>
    )
}
