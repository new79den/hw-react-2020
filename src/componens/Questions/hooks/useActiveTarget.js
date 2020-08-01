import {useState} from 'react';

export const useActiveTarget = () => {
    const [active, setActive] = useState(-1);

    const isShowAnswer = index => index === active;

    return {
        isShowAnswer,
        showAnswer: setActive
    };
}